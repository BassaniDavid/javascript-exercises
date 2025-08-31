const btnFirst = document.getElementById("dropdown-first");
const answerFirst = document.getElementById("answer-first");
const iconFirst = document.getElementById("icon-first");

const btnSecond = document.getElementById("dropdown-second");
const answerSecond = document.getElementById("answer-second");
const iconSecond = document.getElementById("icon-second");

btnFirst.addEventListener("click", function () {
  answerFirst.classList.toggle("d-none");
  if (iconFirst.classList.contains("bi-arrow-down")) {
    iconFirst.classList = "bi bi-arrow-up";
  } else {
    iconFirst.classList = "bi bi-arrow-down";
  }
  if (answerSecond.classList.contains("d-none")) {
  } else {
    answerSecond.classList.add("d-none");
    iconSecond.classList = "bi bi-arrow-down";
  }
});

btnSecond.addEventListener("click", function () {
  answerSecond.classList.toggle("d-none");
  if (iconSecond.classList.contains("bi-arrow-down")) {
    iconSecond.classList = "bi bi-arrow-up";
  } else {
    iconSecond.classList = "bi bi-arrow-down";
  }
  if (answerFirst.classList.contains("d-none")) {
  } else {
    answerFirst.classList.add("d-none");
    iconFirst.classList = "bi bi-arrow-down";
  }
});
