const myMap = new Map();
myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

console.log(myMap.keys()); //[Map Iterator] { 'one', 'two', 'three' }
for (const key of myMap.keys()) {
  console.log(key);
  // one;
  // two;
  // three;
}

// myMap.forEach((key) => {
//   console.log(key);
// });

console.log(myMap.values()); //[Map Iterator] { 1, 2, 3 }
for (const value of myMap.values()) {
  console.log(value);
  // 1;
  // 2;
  // 3;
}

console.log(myMap.entries()); //[Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }
for (const entry of myMap.entries()) {
  console.log(entry);
  // ["one", 1]
  //[("two", 2)]
  // [("three", 3)];
}

console.log(myMap.size); //map의 사이즈(길이)
//3
console.log(myMap.has("two")); //key 기반 검색
//true
