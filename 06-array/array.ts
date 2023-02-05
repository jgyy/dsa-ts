const stringArray = ['a', 'b', 'c', 'd'];

stringArray.push('e');
console.log(stringArray);
stringArray.pop();
console.log(stringArray);
stringArray.unshift('z');
console.log(stringArray);
stringArray.shift();
console.log(stringArray);
stringArray.splice(1, 2, 'x', 'y');
console.log(stringArray);