"use strict";


// 1. printIndices
function printIndices(items) {
  for (item in items) {
    console.log(items[item], item);
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = []
  for (item in items){
    if (item % 2 === 0){
      result.push(items[item])
    }
  }
  console.log(result);
}


// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  sortedNItems = items.slice(0, n);
  reverseSortedNItems = sortedNItems.sort((a, b) => b - a);

  return reverseSortedNItems;
}
