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

const data = { property: "value" };

const markSpot = function (value) {
  const box = document.querySelector(`.${value}`);
  box.classList.add("clicked");
  box.textContent = "X";
};

const randomNum = function () {
  const num = Math.floor(Math.random() * 2);
  console.log(num);
};

randomNum();

// markSpot("box5", array1);

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    console.log(e, e.target.dataset.key);
    data.property = e.target.dataset.key;
    // // markSpot(data, array1);
    // console.log(data);
    // const box = document.querySelector(`.${data}`);
    // // box.textContent = "x";
    // console.log(box);
    markSpot(data.property);
    console.log(data.property);
  })
);
