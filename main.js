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
  
  for (let i = 0; i < input.length; i++){
    if (input[i] < 0){
      negative += input[i];
    } else if (input[i] > 0) {
      positive++;
    } else {
      continue;
    }
  }

    console.log([positive, negative])
      return([positive, negative]);
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
// Penguin Olympics: Swimming Race Disaster

function calculateWinners(snapshot, penguins) {
  // TODO: solve kata
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

//--------------------------------------------------------------------------------------