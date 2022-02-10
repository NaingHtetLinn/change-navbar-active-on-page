const liTags = document.querySelectorAll("nav ul li");
const sliderTag = document.querySelector(".slider");
const sectionTags = document.querySelectorAll("section");

liTags.forEach((li) => {
  li.addEventListener("click", () => {
    let sliderWidth = li.offsetWidth;
    sliderTag.style.width = sliderWidth + "px";
    let sliderLeft = li.offsetLeft;
    sliderTag.style.transform = `translateX(${sliderLeft}px)`;
  });
});

window.addEventListener("load", () => {
  let defineSliderWidth = document.querySelector(".active").offsetWidth;
  sliderTag.style.width = defineSliderWidth + "px";
});

window.addEventListener("scroll", () => {
  let current = "";
  sectionTags.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 4) {
      current = section.getAttribute("id");
    }
  });
  liTags.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
      let sliderWidth = li.offsetWidth;
      sliderTag.style.width = sliderWidth + "px";
      let sliderLeft = li.offsetLeft;
      sliderTag.style.transform = `translateX(${sliderLeft}px)`;
    }
  });
  reveal();
});
const reveal = () => {
  let revealRow = document.querySelectorAll(".row");
  revealRow.forEach((row) => {
    let windowHeight = window.innerHeight;
    let revealTop = row.getBoundingClientRect().top;
    if (revealTop < windowHeight - 150) {
      row.classList.add("reveal");
    } else {
      row.classList.remove("reveal");
    }
  });
};
