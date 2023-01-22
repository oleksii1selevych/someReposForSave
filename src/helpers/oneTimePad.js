import russianStraddlingCheckerboard from "../jsonStorage/russianStraddlingCheckerboard.json";
import englishStraddlingCheckerboard from "../jsonStorage/englishStraddlingCheckerboard.json";

import { getLanguageArray, getTableFromJson } from "./caesarsCipher.js";

export const encryptDecimal = (key, plainText, language) => {
  const straddlingTable = getStraddingCheckerboardFromJson(language);
  const plainCode = convertPlainTextToPlainCode(plainText, straddlingTable);
  const constructedData = constructKey(key, plainCode, straddlingTable);

  const encryptedData  = performDecimalOperation(constructedData.plainCode, constructedData.contructedKey, decimalAddition);
  return encryptedData;
};

export const decryptDecimal = (key, cipherText, language) => {
  const straddlingTable = getStraddingCheckerboardFromJson(language);
  const constructedData = constructKey(key, cipherText, straddlingTable);

  const decryptedSequence = performDecimalOperation(
    constructedData.plainCode,
    constructedData.contructedKey,
    decimalSubstraction
  );


  const plainText = convertPlainCodeToPlainText(decryptedSequence, straddlingTable);
  return plainText;
};

const performDecimalOperation = (
  numericSequence1,
  numericSequence2,
  callback
) => {
  let result = "";
  for (let i = 0; i < numericSequence1.length; i++) {
    const num1 = parseInt(numericSequence1[i]);
    const num2 = parseInt(numericSequence2[i]);
    result += callback(num1, num2);
  }

  return result;
};

const decimalAddition = (num1, num2) => {
  return (num1 + num2) % 10;
};

const decimalSubstraction = (num1, num2) => {
  return (num1 - num2 + 10) % 10;
};

const constructKey = (key, plainCode, straddlingTable) => {
  const numericKey = convertPlainTextToPlainCode(key, straddlingTable);
  let contructedKey = "";

  while (contructedKey.length < plainCode.length) contructedKey += numericKey;

  while (contructedKey.length > plainCode.length) plainCode += "0";

  return { contructedKey, plainCode };
};

const reverseStraddlingTable = (straddlingTable) => {
  const reversedStraddlingTableArray = [];
  for (let entry of straddlingTable.entries()) {
    reversedStraddlingTableArray.push([entry[1], entry[0]]);
  }
  const reversedStraddlingTable = new Map(reversedStraddlingTableArray);
  return reversedStraddlingTable;
};

const convertPlainCodeToPlainText = (plainCode, straddlingTable) => {
  const numerics = plainCode.split("");
  let plainText = "";
  let numberNoteWasUsed = false;

  for (let i = 0; i < numerics.length; i++) {
    if (numerics[i] === "0" && i + 1 === numerics.length) break;
    else if (straddlingTable.has(numerics[i]) && !numberNoteWasUsed && straddlingTable.get(numerics[i]) !== '')
      plainText += straddlingTable.get(numerics[i]);
    else if(straddlingTable.has(numerics[i] + numerics[i + 1]) && straddlingTable.get(numerics[i] + numerics[i + 1]) === "FIG"){
        numberNoteWasUsed = !numberNoteWasUsed;
        i += 1;
    }
    else if(straddlingTable.has(numerics[i] + numerics[i + 1]) && !numberNoteWasUsed){
        plainText += straddlingTable.get(numerics[i] + numerics[i + 1])
        i += 1;
    } else {
        plainText += numerics[i];
        i += 2;
    }
  }

  return plainText;
};

const convertPlainTextToPlainCode = (plainText, straddlingTable) => {
  const characters = plainText.split("");
  let plainCode = "";

  const reversedStraddlingTable = reverseStraddlingTable(straddlingTable);
  let numberWasUsed = false;

  characters.forEach((ch) => {
    const lowerCaseCharacter = ch.toLowerCase();

    if (reversedStraddlingTable.has(lowerCaseCharacter)) {
      plainCode += reversedStraddlingTable.get(lowerCaseCharacter);
      numberWasUsed = false;
    } else if (parseInt(lowerCaseCharacter).toString() !== 'NaN') {
      plainCode += reversedStraddlingTable.get("FIG");
      plainCode += lowerCaseCharacter + lowerCaseCharacter + lowerCaseCharacter;
      plainCode += reversedStraddlingTable.get("FIG");
      numberWasUsed = false;
    } else {
      plainCode += reversedStraddlingTable.get("#");
    }
  });

  return plainCode;
};

const getStraddingCheckerboardFromJson = (language) => {
  const straddlingMap = new Map();
  let json = "";

  switch (language) {
    case "Ru":
      json = russianStraddlingCheckerboard;
      break;
    case "En":
      json = englishStraddlingCheckerboard;
      break;
  }

  for (let number in json) {
    straddlingMap.set(number, json[number]);
  }

  return straddlingMap;
};
