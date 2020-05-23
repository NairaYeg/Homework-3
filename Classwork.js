// make evenly spaced array
const makeEvnlySpcdArr = (a, b, c) => {
  if (a > b) {
    let answer = "Invalid format";
    return answer;
  } else {
    let arr = [];
    let arrTail = [b];
    let i = 0;
    let item = a;
    while (item <= b) {
      arr[i] = item;
      i++;
      item += c;
    }

    return arr.concat(arrTail);
  }
};
console.log(makeEvnlySpcdArr(1, 25, 5)); //[ 1, 6, 11, 16, 21, 25 ]


// make subarrays 
const makeSubArr = (arr) => {
  if (arr.length < 4) {
    return arr;
  } else {
    let resArr = [];
    let a = 0;
    let b = 3;
    for (let i = 0; i < Math.ceil(arr.length / 3); i++) {
      resArr[i] = arr.slice(a, b);
      a += 3;
      b += 3;
    }
    return resArr;
  }
}

console.log(makeSubArr([52, "Apple", 5, 0, 87, "USA"])); //[[52, "Apple", 5,][0, 87, "USA"]]


// find value in object
const findValue = (obj, someKey) => {
  for (let key in obj) {
    if (key === someKey) {
      return obj[key];
    }
  }
  return "The value is not found";
}

console.log(findValue({ user: "name", surname: "something" }, "user"));// name
