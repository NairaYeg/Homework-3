 //task 1
const filterRange = (arr, a, b) => {
  let resArr = []; 
let notValInp = "not valid input";
  if (isNaN(a) === true || isNaN(b) === true) {
    return notValInp;
  } else {
    for (let items of arr) {
      if (items < b && items > a) {
        resArr.push(items);
      }
    }
    return resArr;
  }
};

console.log(filterRange([-10, -8, 0, "shdja", 20], -100, "sjkajd")); //[ -10, -8, 0, 10 ] ;


// task 2
const removeByLetter = (arr, lett) => {
  let res = [];
  let uprCaseLett = lett.toUpperCase(); // get the letter lowercase ,
  let lowCaseLett = lett.toLowerCase(); // get the letter uppercase ,
  for (let items of arr) {
    let tmp = items.slice();
    if (tmp[0] !== uprCaseLett && tmp[0] !== lowCaseLett) {
      res.push(items);
    }
  }
  return res;
};

let lett = "W";
const arr = ["Godfather", "Whiplash", "Social Network"];
console.log(removeByLetter(arr, lett));

// task 3
const findByID = (frameworks, id) => {
  let noData = "No data";
  if (frameworks.length <= id || id < 0) {
    return noData;
  } else {
    return frameworks[id];
  }
};
const frameworks = [
  { id: 1, title: "react" },
  { id: 2, title: "angular" },
  { id: 3, title: "vue" },
];

console.log(findByID(frameworks, 1));
