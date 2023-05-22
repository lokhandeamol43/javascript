var leapYear = function (year) {
  if (typeof year === "number") {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(year + " is a leap year.");
    } else {
      console.log(year + " is not a leap year.");
    }
  } else {
    console.log("Invalid input: " + year + " is not a valid year.");
  }
  console.log("---------------------------------------------------------------");
}

console.log("======================== Leap Year =============================");
console.log("");

leapYear(2020);
leapYear(1999);
leapYear(1600);
leapYear(2022);
leapYear(1945);
leapYear(null);
leapYear("Twenty Twenty");
leapYear(undefined);
leapYear(NaN);
leapYear(1750);
leapYear(1996);
leapYear(1900);

//(year % 4 === 0  && year % 100 !== 0 || year%  400 === 0)
