// Code to display names from the arrName 
// and restict the total length of the display string to < S charactes 

function displayString (arrNames) {
  let resultStr = '';
  const tempArrName = [];

  arrNames.forEach(element => {
    element = element.trim();
    if (/^[a-zA-Z]*[ ]*[a-zA-Z]+$/.test(element)) {
      tempArrName.push(element);
    }
  });
  
  tempArrName.sort((a, b) => a.length - b.length);
  let numberOfLikes = tempArrName.length;
  
  switch (numberOfLikes) {
    case 0:
      resultStr = "Be the first on to like this.";
      break;
    case 1:
      resultStr += tempArrName[0] + " liked this.";
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
        resultStr += ", ";
      }
      resultStr = resultStr.slice(0, -2);
      resultStr += " ";
  
      let remainingLike = tempArrName.length - i;
      if (remainingLike > 0) {
        resultStr += "and " + remainingLike + " more liked this.";
      } else {
        resultStr += "liked this.";
      }
  }
  return resultStr;
}

module.exports = displayString;
