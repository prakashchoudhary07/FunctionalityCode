// Code to display names from the arrName
// and restict the total length of the display string to < S charactes

function displayString(arrNames) {
  const COMMASTRING = ',';
  const SPACESTRING = ' ';
  const ANDSTRING = 'and';
  const BEFIRSTTOLIKE = 'Be the first one to like this.';
  const LIKEDTHIS = 'liked this.';
  const OTHERSLIKEDTHIS = 'others liked this.';
  let resultStr = '';
  const tempArrName = [];

  arrNames.forEach(element => {
    element = element.trim();
    if (!/^[\S]+$/.test(element)) {
      return;
    }
    tempArrName.push(element);
  });

  tempArrName.sort((a, b) => a.length - b.length);
  let numberOfLikes = tempArrName.length;

  switch (numberOfLikes) {
    case 0:
      resultStr = BEFIRSTTOLIKE;
      break;
    case 1:
      resultStr += tempArrName[0] + SPACESTRING + LIKEDTHIS;
      break;
    // case 2:
    //   displayString += tempArrName[0] + " and " + tempArrName[1] + " liked this.";
    //   break;

    default:
      let i;
      let lengthOfDisplayString = 0;

      for (i = 0; i < tempArrName.length && lengthOfDisplayString < 70; i++) {
        lengthOfDisplayString += tempArrName[i].length + 2;
        resultStr += tempArrName[i];
        if (i == tempArrName.length - 2) {
          resultStr += SPACESTRING + ANDSTRING + SPACESTRING;
        } else if (i == tempArrName.length - 1) {
          resultStr += SPACESTRING;
        } else if (lengthOfDisplayString < 70) {
          resultStr += COMMASTRING + SPACESTRING;
        } else {
          resultStr += SPACESTRING;
        }
      }

      // resultStr = resultStr.slice(0, -2);
      // resultStr += ' ';

      let remainingLike = tempArrName.length - i;
      if (remainingLike > 0) {
        resultStr +=
          ANDSTRING +
          SPACESTRING +
          remainingLike +
          SPACESTRING +
          OTHERSLIKEDTHIS;
      } else {
        resultStr += LIKEDTHIS;
      }
  }
  return resultStr;
}

module.exports = displayString;
