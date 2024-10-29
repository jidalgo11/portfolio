const myName = document.querySelector("#me");

const carouselImg = document.querySelectorAll(".carousel-img");
const carouselWrap = document.querySelector("#carousel");
console.log(carouselImg);
let count = 0;

function carousel() {
  // console.log("Before: " + count);
  carouselImg[count].classList.remove("active");
  count = (count + 1) % carouselImg.length;
  // console.log("After: " + count);
  carouselImg[count].classList.add("active");
}

setInterval(carousel, 3500);

for (let i = 0; i < carouselImg.length; i++) {
  if (carouselImg[i].classList.contains("active")) {
    let elHeight = carouselImg[i].clientHeight;
    console.log(carouselImg[i].clientHeight);
    carouselWrap.style.height = elHeight + "px";
    console.log(carouselWrap);
  }
}

myName.addEventListener("mouseover", function () {
  console.log("Bruce");
});

myName.addEventListener("mouseout", function () {
  console.log("Wayne");
});

var obj;
console.log(obj);
