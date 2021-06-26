// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
function isLeapYear(year) {
  return (
    (year % 100 === 0 && year % 400 === 0) ||
    (year % 100 !== 0 && year % 4 === 0)
  );
}

function calculateFirstOfMonthSundays() {
  let year = 1900;

  let daysInMonth = {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  let dayOfWeek = 1;
  let sundayCount = 0;

  // One year from 1900 to 1901, no need to add a for loop for the years.
  for (let month = 1; month <= 12; month++) {
    dayOfWeek += daysInMonth[month] % 7;

    if (dayOfWeek > 7) {
      dayOfWeek = dayOfWeek % 7;
    }
  }

  for (let year = 1901; year <= 2000; year++) {
    for (let month = 1; month <= 12; month++) {
      dayOfWeek += daysInMonth[month] % 7;

      if (dayOfWeek > 7) {
        dayOfWeek = dayOfWeek % 7;
      } else if (dayOfWeek === 7) {
        ++sundayCount;
      }
    }
  }

  return sundayCount;
}

console.log(calculateFirstOfMonthSundays());
