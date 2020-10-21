"use strict";


// 1. countWords
function countWords(phrase) {
  const wordCounts = {};
  words = phrase.split(' ');
  for (word of words) {
    if (!word.words) (
      words[word] = 1;
    ) else {
      words[word] ++;
    }
  }
  return wordCounts;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    '2.50': ['Cantaloupe', 'Honeydew'],
    '2.95': ['Watermelon'],
    '3.25': ['Musk', 'Crenshaw'],
    '14.25': ['Christmas']
  }
  return (melonPrices[price].sort());
}
