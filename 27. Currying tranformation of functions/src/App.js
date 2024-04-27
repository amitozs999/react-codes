//Currying is a functional programming technique
// where a function with multiple arguments is transformed into a sequence of functions
// each taking a single argument.

function calculateVolume(length, breadth, height) {
  return length * breadth * height;
}
console.log(calculateVolume(4, 5, 6));

function calculateVolume(length) {
  return function (breadth) {
    return function (height) {
      //when all 3 values agyi then only return volume
      return length * breadth * height;
    };
  };
}
console.log(calculateVolume(4)(5)(6));

// Basic
let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b); //adding a+b (1+2=3), then recurively passing back calculated value(3), can act as a for next b(5)
    }

    return a; //if no b left just return ans
  };
};

console.log(sum(1)(2)(5)()); // 1(a)+2(b)= 3    3(a)+5(b)=8

// ES6
let sumES6 = (a) => {
  return (b) => {
    return b ? sumES6(a + b) : a;
  };
};

// God level
let sumGod = (a) => (b) => b ? sumGod(a + b) : a;

console.log(sumES6(1)(2)(5)());
console.log(sumGod(1)(2)(5)());
