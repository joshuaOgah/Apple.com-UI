////////////////////////////////////////////////////////////////
////////////////////////// HEADER /////////////////////////////

const nav = document.querySelector("header");
const dropdown = document.getElementsByClassName("dropdown");

window.addEventListener("scroll", function () {
  if (window.scrollY >= nav.getBoundingClientRect().top) {
    nav.classList.add("sticky");
  } else nav.classList.remove("sticky");
});

const setDynamicHeight = function (e) {
  const dropdownContent = e.currentTarget.querySelector(".dropdown-content");
  const height = !dropdownContent.clientHeight
    ? dropdownContent.scrollHeight
    : 0;
  dropdownContent.style.height = `${height}px`;
};

[...dropdown].forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    setDynamicHeight(e);
    document.querySelector(".overlay").style.visibility = "visible";
    document.querySelector(".overlay").style.opacity = 1;
  });
  item.addEventListener("mouseleave", (e) => {
    setDynamicHeight(e);
    document.querySelector(".overlay").style.opacity = 0;
    document.querySelector(".overlay").style.visibility = "hidden";
  });
});

////////////////////////////////////////////////////////////////

const splider = new Swiper(".splider", {
  loop: true,
  lazyloading: true,
  speed: 1200,
  spaceBetween: 9,
  slidesPerView: "auto",
  centeredSlides: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const swiper = new Swiper("#entertainment-swiper", {
  loop: true,
  lazyloading: true,
  centeredSlides: true,
  speed: 1200,
  spaceBetween: 15,
  slidesPerView: 1.02,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const mobileScreen = matchMedia("(max-width: 412px)").matches;

const changeView = function (screen) {
  if (screen) {
    const splider = new Swiper(".splider", {
      loop: true,
      lazyloading: true,
      speed: 1200,
      spaceBetween: 9,
      slidesPerView: "auto",
      centeredSlides: true,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const swiper = new Swiper("#entertainment-swiper", {
      loop: true,
      lazyloading: true,
      centeredSlides: true,
      speed: 1200,
      spaceBetween: 8,
      slidesPerView: 3,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  }
};

// mobileScreen.addEventListener("change", () => changeView);

///////////////////////////////////////////////////////////
////////////////////////// FOOTER ////////////////////////

const footerItems = document.getElementsByClassName("footer__nav-item");

const setHeight = function (content) {
  const height = !content.clientHeight ? content.scrollHeight : 0;
  content.style.height = `${height}px`;
};

[...footerItems].forEach((item) => {
  let dropper = item.children[2];
  let chevronUp = item.children[1].children[1];
  let chevronDown = item.children[1].children[0];

  item.addEventListener("click", () => {
    setHeight(dropper);
    dropper.classList.toggle("block-display");
  });
});
