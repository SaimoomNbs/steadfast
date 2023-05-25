const menuIcon = document.querySelector(".menu_icon");
const mobileMenu = document.querySelector(".mobile_menu");
menuIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const accSingleTriggers = document.querySelectorAll(".js-acc-single-trigger");

accSingleTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleAccordion)
);

function toggleAccordion() {
  const items = document.querySelectorAll(".js-acc-item");
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("is-open");
      return;
    }
    item.classList.remove("is-open");
  });
}

function toggleListItem(contentNumber) {
  // Remove active class from all buttons and content elements
  var listItems = document.getElementsByClassName("listItem");
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].classList.remove("activeBtn");
  }

  var contentElements = document.getElementsByClassName("content");
  for (var i = 0; i < contentElements.length; i++) {
    contentElements[i].classList.remove("activeContent");
  }

  // Add active class to the selected button and content
  var selectedButton = document.querySelector(
    ".listItem:nth-child(" + contentNumber + ")"
  );
  var selectedContent = document.getElementById("content" + contentNumber);
  if (selectedButton && selectedContent) {
    selectedButton.classList.add("activeBtn");
    selectedContent.classList.add("activeContent");
  }
}

const sscExam = document.getElementById("sscExam");
const hscExam = document.getElementById("hscExam");
const no = document.getElementById("no");
const sscDakhil = document.querySelector(".sscDakhil");
const oLevel = document.querySelector(".oLevel");
const hscAlim = document.querySelector(".hscAlim");
const aLevel = document.querySelector(".aLevel");
const masters = document.querySelector(".masters");

sscExam.addEventListener("change", (e) => {
  if (e.target.value === "SSC/Dakhil") {
    oLevel.classList.add("oLevel");
    sscDakhil.classList.remove("sscDakhil");
  }
  if (e.target.value === "oLevel") {
    sscDakhil.classList.add("sscDakhil");
    oLevel.classList.remove("oLevel");
  }
  if (e.target.value === "default") {
    sscDakhil.classList.add("sscDakhil");
    oLevel.classList.add("oLevel");
  }
});

hscExam.addEventListener("change", (e) => {
  if (e.target.value === "HSC/Alim") {
    aLevel.classList.add("aLevel");
    hscAlim.classList.remove("hscAlim");
  }
  if (e.target.value === "aLevel") {
    hscAlim.classList.add("hscAlim");
    aLevel.classList.remove("aLevel");
  }
  if (e.target.value === "default") {
    hscAlim.classList.add("hscAlim");
    aLevel.classList.add("aLevel");
  }
});

no.addEventListener("click", (e) => {
  if (e.target.value === "no") {
    masters.classList.remove("masters");
  }
  if (e.target.value === "yes") {
    masters.classList.add("masters");
  }
});
