const hamberger = document.querySelector(".hamberger");
const hamberger_div = document.querySelector(".hamberger div");
const hamberger_i = document.querySelector(".hamberger i");
const nav__container = document.querySelector(".nav__container");

hamberger.addEventListener("click", (e) => {
  nav__container.classList.toggle("active");
  hamberger_div.classList.toggle("open");
  hamberger_i.classList.toggle("active");
});

// Gallery selectors

const ul_List = document.querySelector(".img_list");
const imgs = Array.from(ul_List.children);
const next_btn = document.querySelector(".btn-right");
const prev_btn = document.querySelector(".btn-left");

let imgWidth = imgs[0].getBoundingClientRect().width;
window.addEventListener("resize", (e) => {
  imgWidth = imgs[0].getBoundingClientRect().width;
  imgs.forEach((img, index) => {
    img.style.left = imgWidth * index + "px";
  });

  let currentImg = ul_List.querySelector(".current-img");
  const distance_move = currentImg.style.left;
  ul_List.style.transform = "translateX(-" + distance_move + ")";
});

imgs.forEach((img, index) => {
  img.style.left = imgWidth * index + "px";
});

const prev = () => {
  let currentImg = ul_List.querySelector(".current-img");
  let prevImg = currentImg.previousElementSibling;
  if (prevImg === null) {
    prevImg = imgs[9];
  }
  const distance_move = prevImg.style.left;
  ul_List.style.transform = "translateX(-" + distance_move + ")";
  currentImg.classList.remove("current-img");
  prevImg.classList.add("current-img");
};

const next = () => {
  let currentImg = ul_List.querySelector(".current-img");
  let nextImg = currentImg.nextElementSibling;
  if (nextImg === null) {
    nextImg = imgs[0];
  }
  const distance_move = nextImg.style.left;
  ul_List.style.transform = "translateX(-" + distance_move + ")";
  currentImg.classList.remove("current-img");
  nextImg.classList.add("current-img");
};

next_btn.addEventListener("click", next);
prev_btn.addEventListener("click", prev);
