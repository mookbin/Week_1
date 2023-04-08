var numbers = [10, 20, 3, 16, 45];

//apply (this로 엮을 객체, [배열] )

// var max = Math.max.apply(null, numbers); //지금 this 엮을 거 아니니까 아무거나
// var min = Math.min.apply(null, numbers);

// console.log("apply 적용 =>", max, min);

//spread operator
console.log(numbers); //[ 10, 20, 3, 16, 45 ]
console.log(...numbers); //10 20 3 16 45

var max = Math.max(...numbers);
var min = Math.min(...numbers);

console.log(max); //45
console.log(min); // 3
