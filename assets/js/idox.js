"use strict";
function openNav() {
  document.querySelector(".closeNav").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow_hide");
  document.querySelector(".menu").classList.toggle("cross");
}

function navWorking() {
  if (window.innerWidth <= 992) {
    document.querySelector("body").classList.remove("overflow_hide");
    document.querySelector(".closeNav").classList.toggle("start-0");
    document.querySelector(".menu").classList.toggle("cross");
  }
}
//
$(".centerSlider").slick({
  centerMode: true,
  centerPadding: "60px",
  dots: true,
  slidesToShow: 1,
  infinite: true,
  speed: 300,
  arrows: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        centerMode: false,
        centerPadding: "0",
        slidesToShow: 1,
      },
    },
  ],
});
//

function addDocument() {
  document.getElementById("fileInput").click();
}
document.getElementById("uploadBtn").addEventListener("click", addDocument);
//
$(".parentBox").slick({
  arrows: false,
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  variableWidth: true,
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 1000,
  pauseOnHover: true,
  cssEase: "linear",
});

//
document.addEventListener("DOMContentLoaded", function () {
  const selectAllCheckbox = document.getElementById("Select-All");
  const checkboxes = document.querySelectorAll(
    'input[type="checkbox"]:not(#Select-All)'
  );
  selectAllCheckbox.addEventListener("click", function () {
    const isChecked = selectAllCheckbox.checked;
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = isChecked;
    });
  });
});
function toggleCheckbox(id) {
  const checkbox = document.getElementById(id);
  checkbox.checked = !checkbox.checked;
}
// back to top button //
let mybutton = document.getElementById("myBtn");
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.innerWidth < 992 && window.scrollY > 1050) {
    mybutton.setAttribute("style", "display: flex;");
  } else if (window.innerWidth >= 992 && window.scrollY > 400) {
    mybutton.setAttribute("style", "display: flex;");
  } else {
    mybutton.setAttribute("style", "display: none;");
  }
});
//
let accitem = document.querySelectorAll(".accordion_item");

accitem.forEach((e, arrow) => {
  e.addEventListener("click", function () {
    const activeAcc = document.querySelector(".active");
    e.classList.toggle("active");
    activeAcc.classList.toggle("addBorder");
    activeAcc && activeAcc.classList.remove("active");
  });
});
//
// preLoader//
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      let loadingOverlay = document.getElementById("loadingOverlay");
      loadingOverlay.style.display = "none";
      document.querySelector("body").classList.remove("overflow_hidden");
    }, 1000);
  });
});
