import russianLettersData from "../jsonStorage/russianLettersFrequencies.json";
import englishLetterData from "../jsonStorage/englishLettersFrequencies.json";
import ukrainianLettersData from "../jsonStorage/ukrainianLettersFrequencies.json";

const generateAlphabeticArray = (start, end) => {
  const startCode = start.charCodeAt(0);
  const endCode = end.charCodeAt(0);
  return [...Array(endCode - startCode + 1)].map((_, index) =>
    String.fromCharCode(index + startCode)
  );
};

export const getLanguageArray = (language) => {
  switch (language) {
    case "Ru":
      const arr = generateAlphabeticArray("а", "я");
      arr.splice(6, 0, "ё");
      return arr;
    case "En":
      return generateAlphabeticArray("a", "z");
    case "Ua":
      return [ "а", "б", "в", "г", "ґ", "д", "е", "є", "ж", "з", "и", "і", "ї", "й", "к", "л",
        "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ь", "ю", "я", ];
  }
};

export const decrypt = (shift, cipher, language) => {
  const languageArray = getLanguageArray(language);
  let encryptionArray = getLanguageArray(language);

  if (shift < 0) shift = languageArray.length + (shift % languageArray.length);

  shiftArray(shift, encryptionArray);

  return mapText(cipher, encryptionArray, languageArray, false);
};

export const encrypt = (shift, message, language) => {
  const languageArray = getLanguageArray(language);
  let encryptionArray = getLanguageArray(language);

  if (shift < 0) shift = languageArray.length + (shift % languageArray.length);
  console.log(shift);

  shiftArray(shift, encryptionArray);

  return mapText(message, languageArray, encryptionArray, false);
};

export const mapText = (
  text,
  textLanguageArray,
  textEncryptionArray,
  makeLowerCase
) => {
  let result = [];
  let textCharacters = [...text.split("")];

  textCharacters.forEach((elem) => {
    const lowerCaseElem = elem.toLowerCase();
    const index = textLanguageArray.indexOf(lowerCaseElem);

    if (index === -1) result.push(elem);
    else {
      let resultCharacter = "";
      if (lowerCaseElem === elem || (lowerCaseElem !== elem && makeLowerCase)) {
        resultCharacter = textEncryptionArray[index];
      } else {
        resultCharacter = textEncryptionArray[index].toUpperCase();
      }
      result.push(resultCharacter);
    }
  });

  return result.join("");
};

export const shiftArray = (shift, encryptionArray) => {
  const n = encryptionArray.length;

  const shiftedArray = [...Array(n)];
  for (let i = 0; i < n; i++) {
    shiftedArray[i] = encryptionArray[(i + shift) % n];
  }
  encryptionArray.splice(0, n, ...shiftedArray);
};

const injectKeywordLetters = (keyword, encryptionArray) => {
  const unique = [...new Set(keyword.split(""))]
    .map((el) => el.toLowerCase())
    .reverse();

  unique.forEach((elem) => {
    const index = encryptionArray.indexOf(elem);
    encryptionArray.splice(index, 1);
    encryptionArray.unshift(elem);
  });
};

export const breakCaesarCipher = (cipher, language, isBestShiftReturned) => {
  const languageArray = getLanguageArray(language);
  let encryptionArray = getLanguageArray(language);
  const languageFrequencyMap = getTableFromJson(language);

  const maxShift = languageArray.length;

  let tmpDistributionValue = Number.MAX_VALUE;
  let bestShift = 0;

  for (let i = 0; i < maxShift; i++) {
    encryptionArray = getLanguageArray(language);
    shiftArray(i, encryptionArray);
    const shiftedText = mapText(cipher, languageArray, encryptionArray, true);
    const cipherFrequencyMap = initializeFrequencyMap(shiftedText, language);
    const squaredXDistribution = countChiSquaredStatistic(
      cipherFrequencyMap,
      languageFrequencyMap,
      cipher.length
    );
    if (squaredXDistribution < tmpDistributionValue) {
      bestShift = i;
      tmpDistributionValue = squaredXDistribution;
    }
  }
  if (isBestShiftReturned) return bestShift;

  encryptionArray = getLanguageArray(language);

  shiftArray(bestShift, encryptionArray);
  return mapText(cipher, languageArray, encryptionArray, false);
};

export const getTableFromJson = (language) => {
  const frequencyMap = new Map();
  let json = "";

  console.log(language);

  switch (language) {
    case "Ru":
      json = russianLettersData;
      break;
    case "En":
      json = englishLetterData;
      break;
    case "Ua":
      json = ukrainianLettersData;
      break;
  }

  for (let letter in json) {
    frequencyMap.set(letter, json[letter]);
  }

  return frequencyMap;
};

export const initializeFrequencyMap = (inputText, language) => {
  const frequencyMap = new Map();
  const languageArray = getLanguageArray(language);

  for (let letter of inputText) {
    const lowerCaseLetter = letter.toLowerCase();

    if (languageArray.indexOf(lowerCaseLetter) !== -1) {
      if (frequencyMap.has(lowerCaseLetter)) {
        const count = frequencyMap.get(lowerCaseLetter);
        frequencyMap.set(lowerCaseLetter, count + 1);
      } else {
        frequencyMap.set(lowerCaseLetter, 1);
      }
    }
  }

  languageArray.forEach((elem) => {
    if (!frequencyMap.has(elem)) frequencyMap.set(elem, 0);
  });

  return frequencyMap;
};

const countChiSquaredStatistic = (
  observedFrequencyMap,
  expectedFrequencyMap,
  cipherTextLength
) => {
  let sum = 0;

  observedFrequencyMap.forEach((value, key) => {
    const expectedCount =
      (expectedFrequencyMap.get(key) / 100) * cipherTextLength;
    const tmp = Math.pow(value - expectedCount, 2) / expectedCount;
    sum += tmp;
  });

  return sum;
};
