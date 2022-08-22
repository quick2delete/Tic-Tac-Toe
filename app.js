const btns = document.querySelectorAll(".btn");

const array1 = [
  "box1",
  "box2",
  "box3",
  "box4",
  "box5",
  "box6",
  "box7",
  "box8",
  "box9",
];

const winArray = [
  ["box1", "box2", "box3"],
  ["box4", "box5", "box6"],
  ["box7", "box8", "box9"],
  ["box1", "box4", "box7"],
  ["box2", "box5", "box8"],
  ["box3", "box6", "box9"],
  ["box1", "box5", "box9"],
  ["box3", "box5", "box7"],
];

const winObj = {
  group1: ["box1", "box2", "box3"],
  group2: ["box4", "box5", "box6"],
  group3: ["box7", "box8", "box9"],
  group4: ["box1", "box4", "box7"],
  group5: ["box2", "box5", "box8"],
  group6: ["box3", "box6", "box9"],
  group7: ["box1", "box5", "box9"],
  group8: ["box3", "box5", "box7"],
};

const playerArray = [];
const computerArray = [];

const data = { property: "value" };

const playerSpot = (value, array) => {
  const mark = "X";
  const clickedBox = document.querySelector(`.${value}`);
  const index = array.indexOf(value);
  playerArray.push(value);
  console.log(playerArray);
  clickedBox.classList.add("clicked");
  clickedBox.textContent = mark;
  array.splice(index, 1);

  return playerArray;
};

const computerSpot = (array) => {
  const mark = "O";
  const arrayLength = array.length;
  const value = array[Math.floor(Math.random() * arrayLength)];
  const clickedBox = document.querySelector(`.${value}`);
  const index = array.indexOf(value);
  computerArray.push(value);
  console.log(computerArray);
  clickedBox.classList.add("clicked");
  clickedBox.textContent = mark;
  array.splice(index, 1);

  return computerArray;
};

const selectWinner = function (array1, array2) {
  // const playerSorted = array1.sort();
  // const computerSorted = array2.sort();

 
    }

// console.log(playerSorted, computerSorted);

selectWinner(["box7", "box2", "box5", "box3"], ["box1", "box2", "box4"]);

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    data.property = e.target.dataset.key;
    playerSpot(data.property, array1);
    setTimeout(() => {
      computerSpot(array1);
    }, 1000);
  })
);
