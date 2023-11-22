const cardLeft = document.querySelector("#card__left");
const cardRight = document.querySelector("#card__right");

cardLeft.addEventListener('mouseenter', () => {
  cardRight.classList.add("hovered")
});

cardLeft.addEventListener('mouseleave', () => {
  cardRight.classList.remove("hovered")
});

cardRight.addEventListener('mouseenter', () => {
  cardLeft.classList.add("hovered")
});

cardRight.addEventListener('mouseleave', () => {
  cardLeft.classList.remove("hovered")
});