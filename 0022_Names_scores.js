const fetch = require("node-fetch");
// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?
async function nameScores() {
  let totalSum = 0;
  let wordSum = 0;

  const regex = new RegExp('"', "g");

  const rawData = await fetch(
    "https://projecteuler.net/project/resources/p022_names.txt"
  );

  let data = await rawData.text();

  let cleanData = data.replace(regex, "").split(",").sort();

  for (let [index, name] of cleanData.entries()) {
    for (let letter of name) {
      wordSum += letter.charCodeAt(0) - 65 + 1;
    }

    totalSum += wordSum * (index + 1);
    wordSum = 0;
  }

  return new Promise((resolve, reject) => {
    resolve(totalSum);
  });
}

nameScores().then((val) => console.log(val));
