const hamburger = document.querySelector(".hamburger i");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-ul-links a");
const model = document.querySelector(".model");
const menuItem = document.querySelectorAll(".menu-item");
const menuImg = document.getElementById("modelImg");
const modelHeading = document.getElementById("modelHead");
const modelDes = document.getElementById("modelDes");
const modelPrice = document.getElementById("modelPrice");
const modelRating = document.getElementById("modelRating");
const closeBtnModel = document.querySelector(".model-close-btn");
const overlay = document.querySelector(".overlay");
const loginBtn = document.querySelector(".loginbtn");
const logincontainer = document.querySelector(".login-container");
const logincloseBtn = document.querySelector(".login-close-btn");
const loginform = document.querySelector(".login-form");
const showSignUp = document.querySelector(".showSignUp");
const signform = document.querySelector(".sign-form");
const showLogin = document.querySelector(".showLogin");
hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("show");
});
const loginformbtn = document.querySelector(".login-form-btn");
const signformbtn = document.querySelector(".sign-form-btn");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navlinks.classList.remove("show");
  });
});

function showText() {
  const inputText = document.querySelector(".input-text");
  if (inputText.value === "") {
    alert("Please enter something first");
  } else {
    alert(`Your Searched for ${inputText.value}`);
  }
}

window.onload = function () {
  // hero section
  ScrollReveal().reveal(".hero-text", {
    delay: 300,
    origin: "top",
    distance: "40px",
    reset: true,
  });
  ScrollReveal().reveal(".hero-des", {
    delay: 600,
    origin: "left",
    distance: "60px",
    reset: true,
  });
  ScrollReveal().reveal(".hero-text-btn", {
    delay: 800,
    origin: "bottom",
    distance: "40px",
    duration: 1000,
    easing: "ease-in-out",
  });
  ScrollReveal().reveal(".hero-img", {
    delay: 30,
    origin: "left",
    distance: "40px",
    reset: true,
    easing: "ease-in-out",
  });
  //   about section
  ScrollReveal().reveal(".about-text", {
    delay: 300,
    origin: "left",
    distance: "40px",
    reset: true,
    easing: "ease-in-out",
  });
  ScrollReveal().reveal(".about-img", {
    delay: 600,
    origin: "right",
    distance: "40px",
    reset: true,
    easing: "ease-in-out",
  });
  ScrollReveal().reveal(".tagline", {
    delay: 900,
    origin: "bottom",
    distance: "40px",
    reset: true,
  });
  //   service section
  ScrollReveal().reveal(".service-title", {
    delay: 300,
    origin: "left",
    distance: "40px",
    reset: true,
  });
  ScrollReveal().reveal(".service-des", {
    delay: 500,
    origin: "left",
    distance: "40px",
    reset: true,
  });
  ScrollReveal().reveal(".box", {
    delay: 700,
    origin: "bottom",
    distance: "40px",
    reset: true,
  });
  //   menu section
  ScrollReveal().reveal(".menu-head", {
    delay: 400,
    origin: "left",
    distance: "40px",
    reset: true,
  });
  ScrollReveal().reveal(".menu-item", {
    delay: 500,
    origin: "bottom",
    distance: "60px",
    reset: true,
  });
  //   contact section
  ScrollReveal().reveal(".contact-title ,.contact-des", {
    delay: 300,
    origin: "left",
    distance: "40px",
    reset: true,
  });
  ScrollReveal().reveal(".cnt", {
    delay: 600,
    origin: "left",
    distance: "40px",
    reset: true,
  });
  ScrollReveal().reveal(".contact-form", {
    delay: 700,
    origin: "right",
    distance: "40px",
    reset: true,
  });
  //   footer part
  ScrollReveal().reveal(".footer-about", {
    delay: 300,
    origin: "left",
    distance: "40px",
    reset: true,
  });
  ScrollReveal().reveal(".footer-quick-links", {
    delay: 500,
    origin: "left",
    distance: "40px",
    reset: true,
  });
  ScrollReveal().reveal(".footer-contact-info", {
    delay: 700,
    origin: "left",
    distance: "40px",
    reset: true,
  });
  ScrollReveal().reveal(".footer-form", {
    delay: 900,
    origin: "right",
    distance: "40px",
    reset: true,
  });
};

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    model.style.display = "flex";
    menuImg.src = item.src;
    modelHeading.textContent = item.dataset.head;
    modelDes.textContent = item.dataset.desc;
    modelPrice.textContent = "Price : " + item.dataset.price;
    modelRating.textContent = "Rating : " + item.dataset.rating;
  });
});

closeBtnModel.addEventListener("click", () => {
  model.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === model) {
    model.style.display = "none";
  }
});
function removeModel() {
  alert(`${modelHeading.textContent} Added to Cart `);
  model.style.display = "none";
}

loginBtn.addEventListener("click", () => {
  logincontainer.classList.add("show");
  overlay.style.display = "block";
  loginform.classList.add("active");
});
logincloseBtn.addEventListener("click", () => {
  logincontainer.classList.remove("show");
  overlay.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === overlay) {
    logincontainer.classList.remove("show");
    overlay.style.display = "none";
  }
});

showSignUp.addEventListener("click", () => {
  loginform.classList.remove("active");
  signform.classList.add("active");
});
showLogin.addEventListener("click", () => {
  signform.classList.remove("active");
  loginform.classList.add("active");
});

loginformbtn.addEventListener("click", () => {
  const loginInputText = document.querySelectorAll(".login-input-text");
  let isEmpty = false;
  loginInputText.forEach((text) => {
    if (text.value.trim() === "") {
      isEmpty = true;
    }
  });
  if (isEmpty) {
    alert("Please enter all required fields");
  } else {
    logincontainer.classList.remove("show");
    overlay.style.display = "none";
    alert("Login Successfully")
  }
 
});
signformbtn.addEventListener("click", () => {
  const signInputText = document.querySelectorAll(".signInputText");
  let isEmptyS = false;
  signInputText.forEach((input) => {
    if (input.value.trim() === "") {
      isEmptyS = true;
    }
  });
  if (isEmptyS) {
    alert("Please enter all required fields");
  } else {
    logincontainer.classList.remove("show");
    overlay.style.display = "none";
    alert("Account Created Succesfully")
  }
});
