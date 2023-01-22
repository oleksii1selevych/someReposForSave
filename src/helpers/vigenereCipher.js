import {
  getLanguageArray,
  initializeFrequencyMap,
  getTableFromJson,
  breakCaesarCipher,
} from "./caesarsCipher.js";

const mapVigenereCipher = (
  inputCharactersArray,
  filledKeyArray,
  languageArray,
  callback
) => {
  let outputText = "";
  let keyProgressIndex = 0;

  for (let i = 0; i < inputCharactersArray.length; i++) {
    const lowerCaseCharacter = inputCharactersArray[i].toLowerCase();
    const inputCharacterIndex = languageArray.indexOf(lowerCaseCharacter);

    if (inputCharacterIndex !== -1) {
      const keyCharacterIndex = languageArray.indexOf(
        filledKeyArray[keyProgressIndex]
      );
      const outputCharacter =
        languageArray[
          callback(inputCharacterIndex, keyCharacterIndex, languageArray.length)
        ];
      outputText +=
        inputCharactersArray[i] === lowerCaseCharacter
          ? outputCharacter
          : outputCharacter.toUpperCase();
      keyProgressIndex += 1;
    } else {
      outputText += inputCharactersArray[i];
    }
  }

  return outputText;
};

export const decrypt = (key, cipher, language) => {
  const languageArray = getLanguageArray(language);
  const filledKeyArray = getFilledKey(key, cipher, languageArray).split(
    ""
  );
  const cipherCharactersArray = cipher.split("");

  let plainText = mapVigenereCipher(
    cipherCharactersArray,
    filledKeyArray,
    languageArray,
    (cipherCh, keyCh, n) => (cipherCh - keyCh + n) % n
  );

  return plainText;
};

export const encrypt = (key, message, language) => {
  const languageArray = getLanguageArray(language);
  const filledKeyArray = getFilledKey(
    key,
    message,
    languageArray
  ).split("");
  const messageCharactersArray = message.split("");

  let cipherText = mapVigenereCipher(
    messageCharactersArray,
    filledKeyArray,
    languageArray,
    (msgCharacter, keyChacter, n) => (msgCharacter + keyChacter) % n
  );

  return cipherText;
};

const getFilledKey = (key, message, languageArray) => {
  const keyLength = key.length;
  const messageLength = message.length;

  if (keyLength >= messageLength) return key;

  let newKey = "";
  newKey += key.toLowerCase();
  const messageCharatersArray = message
    .split("")
    .filter((ch) => languageArray.indexOf(ch.toLowerCase()) !== -1);
    const keyCharacters = newKey.split("");
    let index = 0;

    while (newKey.length < messageCharatersArray.length) {
      newKey += keyCharacters[index];
      index += 1;
      if (index === keyCharacters.length) index = 0;
    }

    return newKey;
};

export const breakVigenereCipher = (cipher, language) => {
  let languageArray = getLanguageArray(language);

  const textCharactersArray = cipher
    .split("")
    .filter((ch) => languageArray.indexOf(ch.toLowerCase()) !== -1);

  let keyPeriod = findKeyPeriod(textCharactersArray, language);

  let slices = [...Array(keyPeriod)];
  for (let i = 0; i < textCharactersArray.length; i++) {
    slices[i % keyPeriod] =
      slices[i % keyPeriod] === undefined ? "" : slices[i % keyPeriod];
    slices[i % keyPeriod] += textCharactersArray[i];
  }

  let key = "";
  languageArray.reverse();

  for (let i = 0; i < keyPeriod; i++) {
    const index = breakCaesarCipher(slices[i], language, true) - 1;
    if (index !== -1) key += languageArray[index];
    else key += languageArray[languageArray.length - 1];
  }

  console.log(key);

  return decrypt(key, cipher, language);

};

const findKeyPeriod = (cipherTextCharactersArray, language) => {
  let found = false;
  let period = 0;

  const languageIoC = indexOfCoincidencePerLanguage(language, true);

  while (!found) {
    period += 1;
    let slices = [...Array(period)];

    for (let i = 0; i < cipherTextCharactersArray.length; i++) {
      slices[i % period] =
        slices[i % period] === undefined ? "" : slices[i % period];
      slices[i % period] += cipherTextCharactersArray[i];
    }

    let sum = 0;

    slices.forEach(
      (slice) => (sum += indexOfCoincidence(slice, language, true))
    );
    let ioc = sum / period;

    if (Math.abs(languageIoC - ioc) < 0.1) found = true;
  }

  return period;
};

const indexOfCoincidencePerLanguage = (language, isNormalized) => {
  const frequencyLanguageTable = getTableFromJson(language);
  let sum = 0;
  frequencyLanguageTable.forEach((value, key) => {
    sum += Math.pow(value / 100, 2);
  });

  sum = isNormalized ? sum * frequencyLanguageTable.size : sum;
  return sum;
};

const indexOfCoincidence = (text, language, isNormalized) => {
  const frequencyMap = initializeFrequencyMap(text, language);

  let numer = 0;
  let total = 0;

  frequencyMap.forEach((value, _) => {
    numer += value * (value - 1);
    total += value;
  });

  return isNormalized
    ? (frequencyMap.size * numer) / (total * (total - 1))
    : numer / (total * (total - 1));
};

const mutualIndexOfCoincidence = (text, language) => {
  const languageIndexOfCoincidence = indexOfCoincidencePerLanguage(
    language,
    false
  );
  const textFrequencyMap = initializeFrequencyMap(text, language);
  const languageFrequencyMap = getTableFromJson(language);

  let mutualIoC = 0;

  textFrequencyMap.forEach((value, key) => {
    mutualIoC += value * (languageFrequencyMap.get(key) / 100);
  });

  mutualIoC /= text.length;

  return mutualIoC;
};
