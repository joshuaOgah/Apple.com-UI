const setHeight = function (content) {
  const height = !content.clientHeight ? content.scrollHeight : 0;
  content.style.height = `${height}px`;
};

////////////////////////////////////////////////////////////////
////////////////////////// HEADER /////////////////////////////
//////////////////////////////////////////////////////////////

const nav = document.querySelector("header");
const dropdown = document.getElementsByClassName("dropdown");
const menuOpen = document.querySelector(".nav-menu");
const navbarContent = document.querySelector(".navbar-content");
const dropdownContent = document.getElementsByClassName("dropdown-content");
const chevronBack = document.getElementsByClassName("chevron-back");

window.addEventListener("scroll", function () {
  if (window.scrollY >= nav.getBoundingClientRect().top) {
    nav.classList.add("sticky");
  } else nav.classList.remove("sticky");
});

const setDynamicHeight = function (e) {
  const dropdownContent = e.target.querySelector(".dropdown-content");
  const height = !dropdownContent.clientHeight
    ? dropdownContent.scrollHeight
    : 0;
  dropdownContent.style.height = `${height}px`;
  console.log(dropdownContent);
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

const forDesktop = window.matchMedia("min-width: 950px").matches;

if (!forDesktop) {
  // MOBILE LOGIC

  // Create Mobile navigation
  const navBar = document.createElement("div");
  Array.from(dropdown).forEach((item) => {
    navBar.appendChild(item);
  });

  navBar.className = "navbar-content_container";
  nav.insertAdjacentElement("afterend", navBar);
  const navbarContainer = document.querySelector(".navbar-content_container");

  // Create the close icon for mobile navigation
  const closeIcon = document.createElement("ion-icon");
  closeIcon.setAttribute("name", "close-outline");
  closeIcon.className = "close-icon";
  navbarContainer.insertAdjacentElement("afterbegin", closeIcon);
  const menuClose = document.querySelector(".close-icon");

  // When the Hamburger menu is clicked
  menuOpen.addEventListener("click", (e) => {
    e.preventDefault();
    navbarContainer.classList.toggle("show-navbar");
    document.body.style.overflow = "hidden";
  });

  // When the close icon is clicked
  menuClose.addEventListener("click", (e) => {
    e.preventDefault();
    navbarContainer.classList.toggle("show-navbar");
    document.body.style.overflow = "visible";
  });

  // When each of the links of the mobile navigation is clicked
  [...dropdown].forEach((item) => {
    let dropdownLink = item.firstElementChild;
    let dropdownContent = item.lastElementChild;

    dropdownLink.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownContent.classList.toggle("show-dropdown");
      dropdownContent.style.display = "block";
    });
  });

  // When the icon to go back is clicked
  [...chevronBack].forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      let presentContent = item.parentElement.parentElement;
      presentContent.style.display = "none";
    });
  });

  [...dropdownContent].forEach((content) => {
    let contentClose = content.children[1];
    contentClose.addEventListener("click", (e) => {
      e.preventDefault();
      navbarContainer.classList.toggle("show-navbar");
      document.body.style.overflow = "visible";
      document.querySelector(".overlay").style.opacity = 0;
      document.querySelector(".overlay").style.visibility = "hidden";
    });
  });
}

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

// const mobileScreen = matchMedia("(max-width: 500px)").matches;

// const changeView = function (screen) {
//   if (screen) {
//     const splider = new Swiper(".splider", {
//       loop: true,
//       lazyloading: true,
//       speed: 1200,
//       spaceBetween: 9,
//       slidesPerView: "auto",
//       centeredSlides: true,
//       keyboard: {
//         enabled: true,
//         onlyInViewport: false,
//       },
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });

//     const swiper = new Swiper("#entertainment-swiper", {
//       loop: true,
//       lazyloading: true,
//       centeredSlides: true,
//       speed: 1200,
//       spaceBetween: 8,
//       slidesPerView: 3,
//       keyboard: {
//         enabled: true,
//         onlyInViewport: false,
//       },
//     });
//   }
// };

// mobileScreen.addEventListener("change", () => changeView);

///////////////////////////////////////////////////////////
////////////////////////// FOOTER ////////////////////////

function FooterSection() {
  const footerItems = document.getElementsByClassName("footer__nav-item");
  const chevronDown = document.querySelector(".chevron-down");
  const chevronUp = document.querySelector(".chevron-up");

  [...footerItems].forEach((item) => {
    let dropper = item.children[2];
    let chevronUp = item.children[1].children[1];
    let chevronDown = item.children[1].children[0];

    item.addEventListener("click", () => {
      setHeight(dropper);
      dropper.classList.toggle("block-display");
      chevronDown.classList.toggle("chevron-inactive");
      chevronUp.classList.toggle("chevron-active");
    });
  });
}

FooterSection();
