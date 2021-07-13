"use strict";

const cards = document.querySelectorAll(".memory__card");
// const front = document.querySelectorAll(".memory__card-front");
// const back = document.querySelectorAll(".memory__card-back");

const flip = function (e) {
  this.classList.toggle("flip");
};

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", flip);
}
