"use strict";

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const circle5 = document.querySelector(".circle5");

const thanks = document.querySelector(".thanks");
const main = document.querySelector("main");
const body = document.querySelector("body");
let rate = document.getElementById("rate");
const submit = document.querySelector(".submit");

const showAgain = function () {
  main.style.display = "block";
  thanks.style.display = "none";
};

const fc1 = function () {
  circle1.style.backgroundColor = "hsl(25, 97%, 53%)";
  circle2.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle3.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle4.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle5.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle1.value = "1";
};
const fc2 = function () {
  circle2.style.backgroundColor = "hsl(25, 97%, 53%)";
  circle1.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle3.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle4.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle5.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle2.value = "2";
};
const fc3 = function () {
  circle3.style.backgroundColor = "hsl(25, 97%, 53%)";
  circle2.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle1.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle4.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle5.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle3.value = "3";
};
const fc4 = function () {
  circle4.style.backgroundColor = "hsl(25, 97%, 53%)";
  circle2.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle3.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle1.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle5.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle4.value = "4";
};
const fc5 = function () {
  circle5.style.backgroundColor = "hsl(25, 97%, 53%)";
  circle2.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle3.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle4.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle1.style.backgroundColor = "hsl(213, 19%, 18%)";
  circle5.value = "5";
};

circle1.addEventListener("click", fc1);
circle2.addEventListener("click", fc2);
circle3.addEventListener("click", fc3);
circle4.addEventListener("click", fc4);
circle5.addEventListener("click", fc5);

submit.addEventListener("click", () => {
  if (circle1.value == "1") {
    main.style.display = "none";
    thanks.style.display = "block";
    rate.innerHTML = circle1.value;
  }
  if (circle2.value == "2") {
    main.style.display = "none";
    thanks.style.display = "block";
    rate.innerHTML = circle2.value;
  }
  if (circle3.value == "3") {
    main.style.display = "none";
    thanks.style.display = "block";
    rate.innerHTML = circle3.value;
  }
  if (circle4.value == "4") {
    main.style.display = "none";
    thanks.style.display = "block";
    rate.innerHTML = circle4.value;
  }
  if (circle5.value == "5") {
    main.style.display = "none";
    thanks.style.display = "block";
    rate.innerHTML = circle5.value;
  }
});

body.addEventListener("keydown", showAgain);
