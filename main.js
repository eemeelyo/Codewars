// Rearrange Number to its highest Value
var maxRedigit = function (num) {
  var ou = [];
  var snum = num.toString();
  if (num <= 0 || snum.length != 3) {
    return null;
  }
  for (var i = 0, len = snum.length; i < len; i += 1) {
    ou.push(+snum.charAt(i));
  }
  var a = ou
    .sort(function (a, b) {
      return b - a;
    })
    .join("");
  return parseInt(a);
};

// Best Practice ---
var maxRedigit = function (num) {
  if (num < 100 || num > 999) return null;
  return +num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
};
//--------------------------------------------------------------------------------------
//Sir , showMe yourID
function showMe(yourID) {
  var s = yourID.match(/^[0-9-a-z-]|-[a-z]|-$|\s/);
  if (s == null) {
    return true;
  } else {
    return false;
  }
}
//The Coupon Code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  var curdate = new Date(currentDate);
  var exdate = new Date(expirationDate);
  if (enteredCode !== correctCode || curdate > exdate) {
    return false;
  } else {
    return true;
  }
}
//Name on billboard---------------------------------------------------------------------------------------------------
function billboard(name, price = 30) {
  var a = name.length;
  var tot = 0;
  for (i = 1; i <= a; i++) {
    tot += price;
  }
  return tot;
}
//-- My Solution ---------------------
function billboard(name, price = 30) {
  var totalCost = 0;
  for (i = 0; i < name.length; i++) {
    totalCost += price;
  }

  return totalCost;
}

//How old will I be in 2099?--------------------------------------------------------------------------------------------------
function calculateAge(p, r) {
  if (r - p > 1) {
    return "You are " + (r - p) + " years old.";
  } else if (r === p - 1) {
    return "You will be born in " + (p - r) + " year.";
  } else if (r < p) {
    return "You will be born in " + (p - r) + " years.";
  } else if (p === r - 1) {
    return "You are " + (r - p) + " year old.";
  } else {
    return "You were born this very year!";
  }
}
//Fix your code before the garden dies!--------------------------------------------------------------------------------------
function rainAmount(mm) {
  if (mm < 40) {
    return "You need to give your plant " + Math.abs(40 - mm) + "mm of water";
  } else {
    return "Your plant has had more than enough water for today!";
  }
}
//My Solution ----
function rainAmount(mm) {
  if (mm < 40) {
    return `You need to give your plant ${40 - mm}mm of water`;
  } else {
    return "Your plant has had more than enough water for today!";
  }
}
//Sum of positive------------------------------------------------------------------------------------------------------------
function positiveSum(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}
//My Solution------
function positiveSum(arr) {
  let positive = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive += arr[i];
    }
  }
  return positive;
}
//// Count of positives / sum of negatives -----------------------------------------------------------------------------

function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;
  if (!input || !input.length) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      negative += input[i];
    } else if (input[i] > 0) {
      positive++;
    } else {
      continue;
    }
  }

  console.log([positive, negative]);
  return [positive, negative];
  // }-----------------------------------------------------------------------------------------------------------------------
  //Heads and Legs
  function animals(heads, legs) {
    var x = (4 * heads - legs) / 2;
    var y = heads - x;
    if (x < 0 || y < 0) {
      return "No solutions";
    }
    if (x === Math.round(Math.abs(x))) {
      return [x, heads - x];
    } else {
      return "No solutions";
    }
  }
  //Match My Husband
  function match(usefulness, months) {
    var sum = usefulness.reduce(function (a, b) {
      return a + b;
    }, 0);
    var grvt = 100 * Math.pow(Math.E, -0.15 * months);
    if (sum >= Math.round(grvt, 3)) {
      return "Match!";
    } else {
      return "No match!";
    }
  }

  //--------------------------------------------------------------------------------------
  // Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

  function howManySmaller(arr, n) {
    //coding here..
    var low = [];
    let high = [];
    console.log(n);

    for (let i = 0; i < arr.length; i++) {
      let arrFixed = arr[i].toFixed(2);
      if (arrFixed < n) {
        low.push(arrFixed);
      } else {
        high.push(arrFixed);
      }
      console.log(low);
    }
    return low.length;
  }

  //---------------------------------------------------------------------------------------
  // If you can't sleep, just count sheep!!
  var countSheep = function (num) {
    //your code here
    //       let count = i + 1;
    let sheepCount = "";
    //   if (num > 0){
    for (let i = 0; i < num; i++) {
      sheepCount += i + 1 + " sheep...";
    }
    return sheepCount;
    //   }
  };
  //----------------------------------------------------------------------------------------
  // Multiplication table for number
  function multiTable(number) {
    // good luck
    let timesTable = "";
    for (let i = 1; i <= 10; i++) {
      //     console.log(number * i);
      if (i === 10) {
        timesTable += i + " * " + number + " = " + number * i;
      } else {
        timesTable += i + " * " + number + " = " + number * i + "\n";
      }
    }
    return timesTable;
  }
  //----------------------------------------------------------------------------------------
  // Remove Exclamation
  return s.replace(/!/g, "");
  //----------------------------------------------------------------------------------------
  //Returning Strings
  function greet(name) {
    return `Hello, ${name} how are you doing today?`;
  }
  //----------------------------------------------------------------------------------------
  //Sentence Smash
  // Smash Words
  function smash(words) {
    //     "use strict";
    let rToS = [...words].join(" ");
    console.log(rToS);
    return rToS;
  }
  //----------------------------------------------------------------------------------------
  //Training JS #16: Methods of String object--slice(), substring() and substr()
  function cutIt(arr) {
    //coding here...
    let shortestLength = Infinity;

    for (let i = 0; i < arr.length; i++) {
      //     console.log(arr[i]);
      if (arr[i].length < shortestLength) {
        shortestLength = arr[i].length;
      }
      console.log(shortestLength);
    }
    return arr.map((string) => string.slice(0, shortestLength));
  }
  //---------------------------------------------------------------------------------------
  // Longest word
  function findLongestWordLength(str) {
    let longestWord = 0;
    let arr = str.split(" ");

    arr.forEach((string) => {
      if (string.length > longestWord) {
        longestWord = string.length;
      }
    });
    console.log(longestWord);
  }

  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  //--------------------------------------------------------------------------------------
  // Penguin Olympics: Swimming Race Disaster

  function calculateWinners(snapshot, penguins) {
    // TODO solve kata
    // RETURN "GOLD: <name-1>, SILVER: <name-2>, BRONZE: <name-3>"
    // Top three penguins
    // Snapshot is String of lanes
    // Each has one Penguin
    // Lanes are same length
    // Penguis are names of penguins in order of lanes
    // Penguins can be "p" or "P"
    // Split snapshot into distance remaining.
    // Count the value of the distance remaining in each lane.
    // When counting "-" + 1 and "~" + 2
    // Label penguins
    // Order penguins with the least difficult route
    // Return the winning panguins

    const lanesArray = snapshot
      .split("|")
      .filter((lane) => lane.toLowerCase().includes("p"));
    const remainingWaterArray = lanesArray.map((lane) => {
      const penguinIndex = lane.toLowerCase().indexOf("p");
      const remainingWater = lane.slice(penguinIndex + 1);
      return remainingWater;
    });
    const remainingTimeArray = remainingWaterArray.map((lane) =>
      calculateTimeRemaining(lane)
    );
    const penguinsAndTimesArray = remainingTimeArray.map((time, index) => {
      return { time: time, penguin: penguins[index] };
    });
    const sortedWinnersArray = penguinsAndTimesArray.sort(
      (a, b) => a.time - b.time
    );
    console.log(sortedWinnersArray);

    return `GOLD: ${sortedWinnersArray[0].penguin}, SILVER: ${sortedWinnersArray[1].penguin}, BRONZE: ${sortedWinnersArray[2].penguin}`;
  }

  function calculateTimeRemaining(lane) {
    const laneArray = lane.split("");
    let timeCounter = 0;

    laneArray.forEach((waterTile) => {
      if (waterTile === "-") {
        timeCounter = timeCounter + 1;
      }
      if (waterTile === "~") {
        timeCounter = timeCounter + 2;
      }
    });
    return timeCounter;
  }
}

//-------------------------------------------------------------------------------------
// A square of squares
var isSquare = function (n) {
  if (n === -1) {
    return false;
  }
  if (n === 0) {
    return true;
  }
  let squareRoot = Math.sqrt(n);
  console.log(n + " = " + squareRoot);

  if (Number.isInteger(squareRoot)) {
    if (squareRoot * squareRoot === n) {
      return true;
    }
  }
  return false; // fix me
};

// --------------------------------------------------------------------------------------
// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
function firstToLast(str, c) {
  //coding here..
  //   console.log(str)
  //   console.log(c)
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    let searchC = str[i].search(c);
    console.log(str[i] + "=" + searchC);
    if (searchC === 0) {
      result++;
      //       console.log(result)
    }
  }

  if (result === 1) {
    result = 0;
  } else if (result === 0) {
    result = -1;
  }

  return result;
}

// --------------------------------------------------------------------------------------
// Grasshopper - If/else syntax debug

function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}
//--------------------------------------------------------------------------------
//Sum The Strings
function sumStr(a, b) {
  if (a === "") {
    a = 0;
  }
  if (b === "") {
    b = 0;
  }
  a = parseInt(a);
  b = parseInt(b);
  console.log(`${a} + ${b}`);

  let sum = a + b;

  return sum.toString();
}
//--------------------------------------------------------------------------------------
//Remove First and Last Character
function removeChar(str) {
  //You got this!
  return str.slice(1, -1);
}
//---------------------------------------------------------------------------------------
//Thinkful - Logic Drills: Traffic light
function updateLight(current) {
  //your code here!
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else if (current === "red") {
    return "green";
  }
  return current;
}
//---------------------------------------------------------------------------------------
//Exclamation marks series #2: Remove all exclamation marks from the end of sentence
function remove(s) {
  //coding and coding....

  return s.replace(/!+$/, "");
}
//-----------------------------------------------------------------------------------------
//Pre-FizzBuzz Workout #1
function preFizz(n) {
  let newArray = [];
  for (let i = 1; i <= n; i++) {
    newArray.push(i);
  }
  return newArray;
}
//----------------------------------------------------------------------------------------
//Cat years, Dog years
var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let catYears = 24;
  let dogYears = 24;

  if (humanYears == 1) {
    catYears -= 9; // 15 years
    dogYears -= 9;
  }
  if (humanYears == 2) {
    catYears; //24 years
    dogYears;
  }
  if (humanYears >= 3) {
    catYears += (humanYears - 2) * 4;
    dogYears += (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
};
//---------------------------------------------------------------------------------------
//Get the mean of an array
function getAverage(marks) {
  //TODO : calculate the downwar rounded average of the marks array
  let mean = 0;

  marks.forEach(getMean);

  function getMean(item) {
    console.log(marks.length);
    mean += item / marks.length;
  }
  return Math.floor(mean);
}
//----------------------------------------------------------------------------------------
//String repeat
function repeatStr(n, s) {
  let string = "";
  let i = 0;
  while (i < n) {
    string += s;
    i++;
  }
  return string;
}
//----------------------------------------------------------------------------------------
//Calculate BMI
function bmi(weight, height) {
  let calcBMI = weight / (height * height);

  if (calcBMI <= 18.5) {
    return "Underweight";
  }
  if (calcBMI <= 25.0) {
    return "Normal";
  }
  if (calcBMI <= 30.0) {
    return "Overweight";
  }
  if (calcBMI > 30) {
    return "Obese";
  }
  return "";
}
//----------------------------------------------------------------------------------------
//Grasshopper - Personalized Message
function greet(name, owner) {
  // Add code here
  if (name === owner) {
    return "Hello boss";
  }
  if (name != owner) {
    return "Hello guest";
  }
}
//---------------------------------------------------------------------------------------
//How old will I be in 2099?
function calculateAge(birth, future) {
  if (future - birth > 1) {
    return "You are " + (future - birth) + " years old.";
  } else if (future == birth - 1) {
    return "You will be born in " + (birth - future) + " year.";
  } else if (future < birth) {
    return "You will be born in " + (birth - future) + " years.";
  } else if (birth == future - 1) {
    return "You are " + (future - birth) + " year old.";
  } else {
    return "You were born this very year!";
  }
}
//----------------------------------------------------------------------------------------
// Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
//----------------------------------------------------------------------------------------
//Kebab case. Line in between words
const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

toKebabCase("camelCase"); // 'camel-case'
toKebabCase("some text"); // 'some-text'
toKebabCase("some-mixed_string With spaces_underscores-and-hyphens"); // 'some-mixed-string-with-spaces-underscores-and-hyphens'
toKebabCase("AllThe-small Things"); // "all-the-small-things"
toKebabCase(
  "IAmListeningToFMWhileLoadingDifferentURLOnMyBrowserAndAlsoEditingSomeXMLAndHTML"
); // "i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-xml-and-html"

//----------------------------------------------------------------------------------
//Factoralize a number
function factorialize(num) {
  let i = 0; //--- Callingthe variable outside because the for wont use let but only var.

  if (num >= 0) {
    for (i = 1; num > 0; num--) {
      i *= num;
    }
  }
  return i;
}

factorialize(5);

//--------------------------------------------------------------------------------------
// Largest of four NUmbers
function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    result[i] = largestNumber;
  }
  console.log(result);
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
//----------------------------------------------------------------------------------------
//Confirm the Ending
function confirmEnding(str, target) {
  return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");

/*Code Explanation
If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.*/
//---------------------------------------------------------------------------------------
//Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  let repeatStr = "";

  while (num > 0) {
    repeatStr += str;
    num--;
  }
  return repeatStr;
}

repeatStringNumTimes("abc", 3);
/*
Code Explanation
Create an empty string variable to store the repeated word.
Use a while loop or for loop to repeat code as many times as needed according to num
Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
At the end of the loop, return the variable for the repeated word.*/

//----------------------------------------------------------------------------------------
//Truncate a String
function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

//Code Explanation
/*We start off with a simple if statement to determine one of two outcomes…
If our string length is greater than the num we want to truncate it, we return a slice of our string starting at character 0, and ending at num. We then append our '...' to the end of the string.
However, if above situation is not true, it means our string length is less than our truncation num. Therefore, we can just return the string.*/

//----------------------------------------------------------------------------------------
//Simple Comparison?
function add(a, b) {
  // code here
  let compare = a == b;
  console.log(compare);
  return compare;
}
//----------------------------------------------------------------------------------------
//Remove the time
function shortenToDate(longDate) {
  // your code here
  let shortDate = longDate.split(",");
  console.log(shortDate[0]);
  return shortDate[0];
}
//----------------------------------------------------------------------------------------
//ES6 string addition
function joinStrings(string1, string2) {
  // code here\
  return `${string1} ${string2}`;
}
//----------------------------------------------------------------------------------------
//Power
function numberToPower(number, power) {
  // Code here
  let numPower = 1;
  while (power > 0) {
    numPower *= number;
    power--;
  }
  console.log(numPower);
  return numPower;
}
//----------------------------------------------------------------------------------------
//Vowel remover
function shortcut(string) {
  let result = string.replace(/[aeiou]/g, "");

  console.log(result);
  return result;
}
//---------------------------------------------------------------------------------------
//Keep Hydrated!
function litres(time) {
  return Math.floor(time * 0.5);
}
//---------------------------------------------------------------------------------------
//Reversed Words
function reverseWords(str) {
  return str.split(" ").reverse().join(" "); // reverse those words
}
//----------------------------------------------------------------------------------------
//Quarter of the year
const quarterOf = (month) => {
  // Your code here
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  } else {
    console.log("Not applicable");
  }
};
//----------------------------------------------------------------------------------------
//Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
  //...
  if (bool === true) {
    return "Yes";
  }
  return "No";
}
//----------------------------------------------------------------------------------------
//How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
  if (name === "Zach") {
    return 18;
  }
  return 0;
}
//----------------------------------------------------------------------------------------
//Area or Perimeter
const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l === w) {
    return l * w;
  }
  return (l + w) * 2;
};
//----------------------------------------------------------------------------------------
//Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if (distanceToPump <= mpg * fuelLeft) {
    return true;
  }
  return false;
};
//----------------------------------------------------------------------------------------
//Do you speak "English"?

function spEng(sentence) {
  //write your code here
  var eng = /english/gi;
  if (sentence.match(eng)) {
    return true;
  }
  return false;
}
//------------------------------------------------------
//Connect Four: Who Won?
//
//SETUP
// Board is a 2D array... Array inside an array
//Board[0][0] is the top left corner of the board.
//Lets say board[x][y] for referring to the grid:
//Gride square can be empty("-") or filled with red('R) or Yellow('Y)
//If there are four red or four yellow squares in a sequence that  colour has won the game.

//IDEAS
//Need algorithm to check through horizontal, vertical and diagonal
//Need algorithm to check board is full or empty - check for '-' during sequence finding
//Need to check four sequence algorithm

let horiontalCheck = checkHorizontal(board);
console.log(horiontalCheck);

function checkHorizontal(board) {
  let sequenceCounter = 1;
  let previousSquare = "";
  let winningColour = "";

  for (let x = 0; x < board.length; x++) {
    if (sequenceCounter === 4) {
      break;
    }
    for (let y = 0; y < board[0].length; y++) {
      let currentSquare = board[x][y];
      if (currentSquare === "-") {
        continue;
      }
      console.log(currentSquare);
      if (currentSquare === previousSquare) {
        sequenceCounter++;
      }
      if (currentSquare !== previousSquare) {
        sequenceCounter = 1;
      }
      if (sequenceCounter === 4) {
        winningColour = currentSquare;
        break;
      }
      previousSquare = currentSquare;
    }
  }
  return winningColour;
}
//-------------------------------------------------------------------------------------
//Calculate average
function find_average(array) {
  // your code here
  if (array === "") {
    return 0;
  }

  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      avg += array[i];
    }
  }
  return avg / array.length;
}
//-------------------------------------------------------------------------------------
//Abbreviate a Two Word Name
function abbrevName(name) {
  let nameSplit = name.split(" ");
  let firstName = nameSplit[0];
  let lastName = nameSplit[1];
  let initials = firstName;
  return `${firstName[0]}.${lastName[0]}`.toUpperCase();
  // code away
}
//-------------------------------------------------------------------------------------
//What's the real floor?
function getRealFloor(n) {
  if (n === 1) {
    return 0;
  }
  if (n === 0) {
    return 0;
  }
  if (n >= 13) {
    return n - 2;
  }
  if (n <= 12 && n > 0) {
    return n - 1;
  }
  if (n < 0) {
    return n;
  }
}
//-------------------------------------------------------------------------------------
//Will there be enough space?
function enough(cap, on, wait) {
  // your code here
  let available = cap - on;
  if (available >= wait) {
    return 0;
  }
  return wait - available;
}
//-------------------------------------------------------------------------------------
//Drink about
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  }
  if (old < 18) {
    return "drink coke";
  }
  if (old < 21) {
    return "drink beer";
  }
  if (old >= 21) {
    return "drink whisky";
  }
  return "";
}
//-------------------------------------------------------------------------------------
//Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol) {
  let total = (normPrice * discount) / 100;
  let cover = hol / total;
  return Math.floor(cover);
}
//-------------------------------------------------------------------------------------
//Price of Mangoes
function mango(quantity, price) {
  let extra = 0;
  let newQuantity = quantity;
  console.log(`Give quantity = ${quantity}, Price = ${price}`);
  while (newQuantity >= 3) {
    newQuantity -= 3;
    extra += 1;

    //     if(newQuantity <= 2){
    //       quantity += newQuantity;
    //       console.log(`Quantity = ${quantity}`)
    //     }
  }
  console.log(`${quantity}, ${price}`);
  console.log((quantity - extra) * price);
  return (quantity - extra) * price;
}
//-------------------------------------------------------------------------------------
//pick a set of first elements
function first(arr, n) {
  // return arr;
  let result = [];

  if (n == 0) {
    result = [];
    console.log(result);
  }

  if (n == undefined) {
    result.push(arr[0]);
    console.log(result);
  }

  if (n > arr.length) {
    n = arr.length;
  }

  for (let i = 0; i < n; i++) {
    result.push(arr[i]);
  }

  return result;
}
//------------------------------------------------------------------------------------------------------
//Keep up the hoop
function hoopCount(n) {
  //your code goes here
  if (n >= 10) {
    return "Great, now move on to tricks";
  }
  return "Keep at it until you get it";
}
//--------------------------------------------------------------------------------------------------------
//Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m;
  }
  return 0;
}
//---------------------------------------------------------------------------------------------------------
//MakeUpperCase
function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}
//----------------------------------------------------------------------------------------------------------
//Who likes it?
function likes(names) {
  // TODO
  if (names.length === 0) {
    return "no one likes this";
  }
  if (names.length === 1) {
    return `${names} likes this`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  }
  if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  }
  if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
//----------------------------------------------------------------------------------------
//Counting sheep...
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let sheeps = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      sheeps += 1;
    }
  }
  return sheeps;
}
//----------------------------------------------------------------------------------------
//Finders Keepers
function findElement(arr, func) {
  let num = 0;

  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  }

  return undefined;
}
//----------------------------------------------------------------------------------------
//Boo Who Boolean Type?
function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);
//----------------------------------------------------------------------------------------
//Title Case a Sentence
function titleCase(str) {
  let strArray = str.toLowerCase().split(" ");
  let result = strArray.map(function (element) {
    return element.replace(element.charAt(0), element.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
//--------------------------------------------------
// FIXME: Replace all dots
var replaceDots = function (str) {
  return str.replace(/\./g, "-"); //<<<<< regex Selecting all the dots and replace with "-"
};
//------------------------------------------------
//Compare within margin
function closeCompare(a, b, margin) {
  // ...
  let result = 0;
  console.log(a, b, margin);
  if (margin === undefined) {
    margin = 0;
  }
  if (a < b) {
    result = b - a;
    if (result <= margin) {
      return 0;
    }
    return -1;
  }
  if (a > b) {
    result = a - b;
    if (result <= margin) {
      return 0;
    }
    return 1;
  }
  if (a === b) {
    result = 0;
  }
  return result;
}
//---------------------------------------------------------------------------------------
//Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
function firstToLast(str, c) {
  //coding here..
  let first = str.indexOf(c);
  let last = str.lastIndexOf(c);

  if (first === -1 && last === -1) {
    return -1;
  }
  return last - first;
}
//--------------------------------------------------------------------------------------
//
