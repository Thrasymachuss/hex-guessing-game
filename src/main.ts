import "./style.css";
import $ from "jquery";

let answerIndex = 0;

const generateHex = () =>
  "#" +
  new Array(6)
    .fill("")
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

const generateAnswer = () => Math.floor(Math.random() * 3);

const resetGame = () => {
  answerIndex = generateAnswer();
  $(".btn").each((i, element) => {
    const hex = generateHex();
    element.textContent = hex;
    if (i === answerIndex) {
      $(".main-color").css("background-color", hex);
    }
  });
};

$(".btn").each((i, element) => {
  element.addEventListener("click", () => {
    if (i === answerIndex) {
      resetGame();
      $(".message").css("color", "darkgreen").text("You are correct!");
    } else {
      $(".message").css("color", "darkred").text("Wrong answer! Try again.");
    }
  });
});

resetGame();
