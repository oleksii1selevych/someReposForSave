const intialPermutationTable = [
  58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 28, 20, 12, 4, 62, 54, 46, 38,
  30, 22, 14, 6, 64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1,
  59, 51, 43, 35, 27, 19, 11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39,
  31, 23, 15, 7,
];

const circullarLeftShiftTable = [
  1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1,
];


const circullarRightShiftTable = [
  1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1 
]

const compressionPermutationTable = [
  14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16, 7, 27,
  20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34,
  53, 46, 42, 50, 36, 29, 32,
];

const expansionPermutationTable = [
  32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 12, 13, 12, 13, 14, 15, 16,
  17, 16, 17, 18, 19, 20, 21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29,
  28, 29, 30, 31, 32, 1,
];

const sBoxSubstitutionTable = [
  [
    14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7, 0, 15, 7, 4, 14, 2,
    13, 1, 10, 6, 12, 11, 9, 5, 3, 8, 4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7,
    3, 10, 5, 0, 15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13,
  ],
  [
    15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10, 3, 13, 4, 7, 15, 2, 8,
    14, 12, 0, 1, 10, 6, 9, 11, 5, 0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9,
    3, 2, 15, 13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9,
  ],
  [
    10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8, 13, 7, 0, 9, 3, 4, 6,
    10, 2, 8, 5, 14, 12, 11, 15, 1, 13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5,
    10, 14, 7, 1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12,
  ],
  [
    7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15, 13, 8, 11, 5, 6, 15,
    0, 3, 4, 7, 2, 12, 1, 10, 14, 9, 10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14,
    5, 2, 8, 4, 3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14,
  ],
  [
    2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9, 14, 11, 2, 12, 4, 7,
    13, 1, 5, 0, 15, 10, 3, 9, 8, 6, 4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6,
    3, 0, 14, 11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3,
  ],
  [
    12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11, 10, 15, 4, 2, 7, 12,
    9, 5, 6, 1, 13, 14, 0, 11, 3, 8, 9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1,
    13, 11, 6, 4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13,
  ],
  [
    4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1, 13, 0, 11, 7, 4, 9, 1,
    10, 14, 3, 5, 12, 2, 15, 8, 6, 1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0,
    5, 9, 2, 6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12,
  ],
  [
    13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7, 1, 15, 13, 8, 10, 3,
    7, 4, 12, 5, 6, 11, 0, 14, 9, 2, 7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13,
    15, 3, 5, 8, 2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11,
  ],
];

const pBoxPermutationTable = [
  16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5, 18, 31, 10, 2, 8, 24, 14, 32,
  27, 3, 9, 19, 13, 30, 6, 22, 11, 4, 25,
];

const finalPermutationTable = [
  40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47, 15, 55, 23, 63, 31, 38, 6, 46, 14,
  54, 22, 62, 30, 37, 5, 45, 13, 53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28,
  35, 3, 43, 11, 51, 19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9,
  49, 17, 57, 25,
];


const weakHexKeys = [
  "01-01-01-01-01-01-01-01",
  "FE-FE-FE-FE-FE-FE-FE-FE",
  "1F-1F-1F-1F-0E-0E-0E-0E",
  "E0-E0-E0-E0-F1-F1-F1-F1"
]

const hasKeyWeakness = (keyBits) => {


  weakHexKeys.forEach(element => {
    
    let binaryString = "";
    const hexNums = element.split("-");
    hexNums.forEach(num => {
      binaryString += hex2bin(num);
    });

    if(keyBits.join("") === binaryString)
      return true;
  });

  return false;
} 

const hex2bin = (hex) => (parseInt(hex, 16).toString(2)).padStart(8, '0');


export const encryptWithDes = (inputMessage, key) => {
  let inputMessageBits = convertTextToBits(inputMessage);
  let keyBits = convertTextToBits(key);

  appendZeroes(inputMessageBits);
  appendZeroes(keyBits);

  let discardedKeyBits = discardEighthBitsFromKey(keyBits);

  let cipherTextBits = [];

  for (let i = 0; i < inputMessageBits.length; i += 64) {
    let inputMessageBitsSlice = inputMessageBits.slice(i, i + 64);
    cipherTextBits.push(...encryptBitBlock(inputMessageBitsSlice, discardedKeyBits));
  }

  const ciphertext = convertBitsToText(cipherTextBits);
  return ciphertext;
};


export const decryptWithDes = (ciphertext, key) => {

  let cipertextBits = convertTextToBits(ciphertext);
  let keyBits = convertTextToBits(key);

  appendZeroes(cipertextBits);
  appendZeroes(keyBits);

  let discardedKeyBits = discardEighthBitsFromKey(keyBits);
  let inputMessageBits = [];

  for (let i = 0; i < cipertextBits.length; i += 64) {
    let ciphertextBitsSlice = cipertextBits.slice(i, i + 64);
    inputMessageBits.push(...decryptBitBlock(ciphertextBitsSlice, discardedKeyBits));
  }

  console.log(inputMessageBits.join(""));

  const inputMessage =  convertBitsToText(inputMessageBits);
  return inputMessage;
}


const decryptBitBlock = (ciphertextBits, discardedKeyBits) => {

  const initiallyPermutatedCiphertextBits = initialPermutation(ciphertextBits);
  let { lpt, rpt } = divideIntoLptAndRpt(initiallyPermutatedCiphertextBits);

  let { lptBitsResult, rptBitsResult } = reversedSixteenRounds(
    lpt,
    rpt,
    discardedKeyBits
  );

  let attachedLptAndRptBits = [...lptBitsResult, ...rptBitsResult];
  let finallyPermutatedCiphertextBits = finalPermutation(attachedLptAndRptBits);

  return finallyPermutatedCiphertextBits;
}

const encryptBitBlock = (textBits, discardedKeyBits) => {
  const initiallyPermutatedTextBits = initialPermutation(textBits);
  let { lpt, rpt } = divideIntoLptAndRpt(initiallyPermutatedTextBits);

  let { lptBitsResult, rptBitsResult } = sixteenRounds(
    lpt,
    rpt,
    discardedKeyBits
  );

  let attachedLptAndRptBits = [...lptBitsResult, ...rptBitsResult];
  let finallyPermutatedTextBits = finalPermutation(attachedLptAndRptBits);

  return finallyPermutatedTextBits;
};

const reversedSixteenRounds = (lptBits, rptBits, discardedKeyBits) => {

  let n = 0;
  let shiftedKeyBits = discardedKeyBits;

  for(let i  = 0; i < 16; i++) {

    const compressedKeyBits = compressionPermutation(shiftedKeyBits);
    const expandedLptBits = expansionPermutation(lptBits);
    const XORedLptBts = xorOperation(compressedKeyBits, expandedLptBits);
    const sBoxLptBits = sBoxSubstitution(XORedLptBts);
    const pBoxLptBits = pBoxPermutation(sBoxLptBits);
    const XORedCiphertextBits = xorOperation(pBoxLptBits, rptBits);

    rptBits = lptBits;
    lptBits = XORedCiphertextBits;

    n = circullarRightShiftTable[i];

    let { cKey, dKey } = divideIntoCKeyAndDKey(shiftedKeyBits);

    for (let j = 0; j < n; j++) {
      cKey = circullarRightShift(cKey);
      dKey = circullarRightShift(dKey);
    }

    shiftedKeyBits = attachCKeyAndDKEY(cKey, dKey);
  }

  return { lptBitsResult: lptBits, rptBitsResult: rptBits };
}

const sixteenRounds = (lptBits, rptBits, discardedKeyBits) => {
  let n = 0;
  let shiftedKeyBits = discardedKeyBits;

  for (let i = 0; i < 16; i++) {
    n = circullarLeftShiftTable[i];

    let { cKey, dKey } = divideIntoCKeyAndDKey(shiftedKeyBits);

    for (let j = 0; j < n; j++) {
      cKey = circullarLeftShift(cKey);
      dKey = circullarLeftShift(dKey);
    }

    shiftedKeyBits = attachCKeyAndDKEY(cKey, dKey);

    const compressedKeyBits = compressionPermutation(shiftedKeyBits);
    const expandedRptBits = expansionPermutation(rptBits);
    const XORedRptBits = xorOperation(compressedKeyBits, expandedRptBits);
    const sBoxRptBits = sBoxSubstitution(XORedRptBits);
    const pBoxRptBits = pBoxPermutation(sBoxRptBits);
    const XORedTextBits = xorOperation(pBoxRptBits, lptBits);
    lptBits = rptBits;
    rptBits = XORedTextBits;
  }

  return { lptBitsResult: lptBits, rptBitsResult: rptBits };
};

const initialPermutation = (textBitArray) => {
  let tmp;
  let permutatedArray = [];

  for (let i = 0; i < 64; i++) {
    tmp = intialPermutationTable[i];
    permutatedArray.push(textBitArray[tmp - 1]);
  }

  return permutatedArray;
};

const circullarLeftShift = (keyPartBits) => {
  let firstBit = keyPartBits[0];
  let shiftedBits = [];
  for (let i = 0; i < 27; i++) {
    shiftedBits.push(keyPartBits[i + 1]);
  }
  shiftedBits.push(firstBit);
  return shiftedBits;
};

const circullarRightShift = (keyPartBits) => {
  let shiftedBits = [];
  shiftedBits.push(keyPartBits[27]);

  for(let i = 0; i < 27; i++){
    shiftedBits.push(keyPartBits[i]);
  }

  return shiftedBits;
}

const discardEighthBitsFromKey = (keyBitArray) => {
  let changedKey = [];

  for (let i = 0; i < keyBitArray.length; i++) {
    if ((i + 1) % 8 !== 0) changedKey.push(keyBitArray[i]);
  }

  return changedKey;
};

const appendZeroes = (arrayToAppend) => {
  if (arrayToAppend.length % 64 !== 0) {
    let zeroesNumber = 64 - (arrayToAppend.length % 64);
    for (; zeroesNumber > 0; zeroesNumber--) arrayToAppend.push(0);
  }
};

const toBits = (number, bitsQuantity) => {
  let bitArray = number
    .toString(2)
    .split("")
    .map((ch) => parseInt(ch));

  for (; bitArray.length < bitsQuantity; ) bitArray.unshift(0);
  return bitArray;
};

const convertTextToBits = (text) => {
  const charArray = text.split("");
  const bitArray = [];

  charArray.forEach((ch) => bitArray.push(...toBits(ch.charCodeAt(0), 8)));
  return bitArray;
};

const divideIntoLptAndRpt = (bitArray) => {
  let lpt = new Array(...bitArray.slice(0, 32));
  let rpt = new Array(...bitArray.slice(32, 64));
  return { lpt, rpt };
};

const divideIntoCKeyAndDKey = (keyBits) => {
  let cKey = new Array(...keyBits.slice(0, 28));
  let dKey = new Array(...keyBits.slice(28, 56));
  return { cKey, dKey };
};

const attachCKeyAndDKEY = (cKey, dKey) => new Array(...cKey, ...dKey);

const compressionPermutation = (keyBits) => {
  let compressedKeyBits = [];
  let tmp;
  for (let i = 0; i < 48; i++) {
    tmp = compressionPermutationTable[i];
    compressedKeyBits.push(keyBits[tmp - 1]);
  }
  return compressedKeyBits;
};

const expansionPermutation = (rptBits) => {
  let expandedRpt = [];
  let tmp;
  for (let i = 0; i < 48; i++) {
    tmp = expansionPermutationTable[i];
    expandedRpt.push(rptBits[tmp - 1]);
  }
  return expandedRpt;
};

const xorOperation = (bitArrayFirst, bitArraySecond) => {
  let xorResultBitArray = [];
  for (let i = 0; i < bitArrayFirst.length; i++) {
    xorResultBitArray.push(bitArrayFirst[i] ^ bitArraySecond[i]);
  }
  return xorResultBitArray;
};

const sBoxSubstitution = (XORedRptBits) => {
  let tempBits,
    row,
    col,
    sBoxIndex = 0,
    sBoxSubstitutedBits = [];
  for (let i = 0; i < 48; i += 6) {
    tempBits = XORedRptBits.slice(i, i + 6);
    row = toDecimal([tempBits[0], tempBits[tempBits.length - 1]]);
    col = toDecimal(tempBits.slice(1, 5));

    let sBoxValue = sBoxSubstitutionTable[sBoxIndex][row * 16 + col];
    let sBoxBitValue = toBits(sBoxValue, 4);
    sBoxSubstitutedBits.push(...sBoxBitValue);
    sBoxIndex += 1;
  }

  return sBoxSubstitutedBits;
};

const toDecimal = (bitArray) => parseInt(bitArray.join(""), 2);

const pBoxPermutation = (sBoxRptBits) => {
  let tmp;
  let pBoxRptBits = [];
  for (let i = 0; i < 32; i++) {
    tmp = pBoxPermutationTable[i];
    pBoxRptBits.push(sBoxRptBits[tmp - 1]);
  }
  return pBoxRptBits;
};

const finalPermutation = (attachedLptAndRptBits) => {
  let tmp;
  let finallyPermutatedTextBits = [];
  for (let i = 0; i < 64; i++) {
    tmp = finalPermutationTable[i];
    finallyPermutatedTextBits.push(attachedLptAndRptBits[tmp - 1]);
  }
  return finallyPermutatedTextBits;
};

const convertBitsToText = (bitArray) => {
    let plainText = "";
  
    for (let i = 0; i < bitArray.length; i += 8) {
      let aciiCode = toDecimal(bitArray.slice(i, i + 8));

      if(aciiCode === 0)
        break;

      plainText += String.fromCharCode(aciiCode);
    }
  
    return plainText;
};
  