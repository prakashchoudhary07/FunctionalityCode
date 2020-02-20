// Code to display names from the arrName and reistict the total length of the display string to < 100 charactes 


const arrNames = [
  " ",
  "Ankush",
  "Tanay",
  "Akankash",
  "Sagar",
  "Prashanth",
  "Nikhil",
  ""
];

let displayString = "";
let tempArrName = [];

arrNames.forEach(element => {
  element = element.trim();
  if (/^[a-zA-Z]*[ ]*[a-zA-Z]+$/.test(element)) {
    tempArrName.push(element);
  }
});

tempArrName.sort((a, b) => a.length - b.length);
let numberOfLikes = tempArrName.length;

console.log(tempArrName);

switch (numberOfLikes) {
  case 0:
    displayString = "Be the first on to like this.";
    break;
  case 1:
    displayString += tempArrName[0] + " liked this.";
    break;
  // case 2:
  //   displayString += tempArrName[0] + " and " + tempArrName[1] + " liked this.";
  //   break;

  default:
    let i;
    let lengthOfDisplayString = 0;
    for (i = 0; i < tempArrName.length && lengthOfDisplayString < 70; i++) {
      lengthOfDisplayString += tempArrName[i].length + 2;
      displayString += tempArrName[i];
      displayString += ", ";
    }
    displayString = displayString.slice(0, -2);
    displayString += " ";

    let remainingLike = tempArrName.length - i;
    if (remainingLike > 0) {
      displayString += "and " + remainingLike + " more liked this.";
    } else {
      displayString += "liked this.";
    }
}

console.log(displayString);
