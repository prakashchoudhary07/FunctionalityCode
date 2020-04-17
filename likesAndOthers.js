// Code to display names from the arrName
// and restict the total length of the display string to < S charactes
const COMMA = ',';
const SPACE = ' ';
const AND = 'and';
const BE_FIRST_TO_LIKE = 'Be the first one to like this.';
const LIKED_THIS = 'liked this.';
const MORE_LIKED_THIS = 'more liked this.';

function getProcessedInput(arr) {
  const tempArr = [];
  arr.forEach(element => {
    tempArr.push(element);
  });
  getSortedArray(tempArr);
  return tempArr;
}

function getSortedArray(arr) {
  arr.sort((a, b) => a.length - b.length);
}

function moreItems(arr, maxStrLen) {

  let tempArr = [];
  let strLen = 0;
  let str = '';
  arr.forEach((val, i) => {
    if (strLen < (maxStrLen - 25)) { // Space reserved for ending charecters
      strLen += (val.length + 2) // Name,   :(Space and comma occupies 2 char bolck)
      tempArr.push(i);
    }
  });

  if (tempArr.length < arr.length) {
    for (let i = 0, max = tempArr.length; i < max; i++) {
      str += arr[i];
      if (max - i > 1) {
        str += `${COMMA}${SPACE}`;
      }
      else if (max - i === 1) {
        str += `${SPACE}${AND}${SPACE}`;
      }
    }
  }
  else {
    for (let i = 0, max = tempArr.length; i < max; i++) {
      str += arr[i];
      if (max - i > 2) {
        str += `${COMMA}${SPACE}`;
      }
      else if (max - i === 2) {
        str += `${SPACE}${AND}${SPACE}`;
      }
      else if (max - i === 1) {
        str += `${SPACE}`;
      }
    }
  }


  let remainingLike = (arr.length - tempArr.length);

  if (remainingLike > 0) {
    str += `${remainingLike}${SPACE}${MORE_LIKED_THIS}`;
  } else {
    str += LIKED_THIS;
  }

  return str;
}




function displayString(arrNames, maxStringLength = 100) {
  let resultStr = '';
  const tempArrName = getProcessedInput(arrNames);

  let numberOfLikes = tempArrName.length;
  switch (numberOfLikes) {
    case 0:
      resultStr = BE_FIRST_TO_LIKE;
      break;
    case 1:
      resultStr += `${tempArrName[0]}${SPACE}${LIKED_THIS}`;
      break;
    default:
      resultStr = ((maxStringLength > 0) ? moreItems(tempArrName, maxStringLength) : '');
  }
  return resultStr;
}

module.exports = displayString;
