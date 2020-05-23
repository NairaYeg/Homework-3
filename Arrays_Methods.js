//includes()
const checkForInclusion = (arr, element) => {
  for (let item of arr) {
    if (item == element) {
      return true;
    }
  }
  return false;
};

console.log(checkForInclusion([0, 52, 45, 85, 985, 63], 1)); // false

//join()
const getToString = (arr) => {
  let res = "";
  for (let items of arr) {
    res = ` ${res}${items}, `;
  }

  return res;
};

console.log(getToString(["Elon", "Musk", "Company", "Xcom"])); //Elon, Musk, Company, Xcom

//slice()
const getToSlice = (arr, from, to) => {
  let res = [];
  for (let item of arr) {
    let caunt = res.length;
    if (from <= arr.indexOf(item) && arr.indexOf(item) < to) {
      res[Number(caunt)] = item;
      caunt++;
    }
  }

  return res;
};

console.log(getToSlice(["Banana", "Orange", "Lemon", "Apple", "Mango"], 1, 3)); //["Orange", "Lemon"]


// fill()
const makeAllElementSame = (arr, StaticValue) => {
  for (let elem of arr) {
    arr[arr.indexOf(elem)] = StaticValue;
  }
  return arr;
};

console.log(makeAllElementSame(["Elon", "Musk", "Company", "Xcom"], "Jeff")); //["Jeff", "Jeff", "Jeff", "Jeff"]

//findIndex

const findIndex = (arr, arg) => {
  let index;
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arg) {
        index = i;
        return index;
      }
    }
  }
  let retValue = -1;
  if (arr.length === 0) {
    return retValue;
  }
};

console.log(findIndex(["Elon", "Musk", "Xcom"], "Xcom")); //2
console.log(findIndex([], "Xcom")); //-1


  
