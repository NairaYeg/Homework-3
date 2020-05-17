const findByID = (frameworks, id) => {
  if (frameworks.length <= id) {
    return console.log("No data");
  } else {
    return console.log(frameworks[id]);
  }
};
const frameworks = [
  { id: 1, title: "react" },
  { id: 2, title: "angular" },
  { id: 3, title: "vue" },
];

console.log(findByID(frameworks, 5));


  
