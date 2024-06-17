/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function selectRandomWordFromArray(wordArray) {
  const selector = Math.floor(Math.random() * wordArray.length);
  return wordArray[selector];
}

window.onload = function() {
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  const excuse = document.getElementById("excuse");
  excuse.innerHTML =
    selectRandomWordFromArray(who) +
    " " +
    selectRandomWordFromArray(action) +
    " " +
    selectRandomWordFromArray(what) +
    " " +
    selectRandomWordFromArray(when);
};
