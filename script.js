"use strict";

const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");
const circle3 = document.querySelector(".circle3");
const circle4 = document.querySelector(".circle4");
const circle5 = document.querySelector(".circle5");

const thanks = document.querySelector(".thanks");
const main = document.querySelector("main");
const body = document.querySelector("body");
const rate = document.getElementById("rate");

const popup1 = function () {
  main.style.display = "none";
  thanks.style.display = "block";
  rate.innerHTML = 1;
};

const popup2 = function () {
  main.style.display = "none";
  thanks.style.display = "block";
  rate.innerHTML = "2";
};

const popup3 = function () {
  main.style.display = "none";
  thanks.style.display = "block";
  rate.innerHTML = "3";
};

const popup4 = function () {
  main.style.display = "none";
  thanks.style.display = "block";
  rate.innerHTML = "4";
};

const popup5 = function () {
  main.style.display = "none";
  thanks.style.display = "block";
  rate.innerHTML = "5";
};

const showAgain = function () {
  main.style.display = "block";
  thanks.style.display = "none";
};

circle1.addEventListener("click", popup1);

circle2.addEventListener("click", popup2);
circle3.addEventListener("click", popup3);
circle4.addEventListener("click", popup4);
circle5.addEventListener("click", popup5);

body.addEventListener("keydown", showAgain);
