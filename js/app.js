/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let sections = document.querySelectorAll("[data-nav]");
let navBar = document.querySelector("#navbar__list");
const section = document.querySelectorAll("section");
/**
 * End Global Variables
 * Begin Main Functions
 *
 */

// build the nav

sections.forEach((element, index) => {
  //creating Nav Links
  const li = document.createElement("li");
  const a = document.createElement("a");

  //getting Section Name to later pass as Nav Name
  const navName = section[index].getAttribute("data-nav");
  const sectionId = element.id;

  //create Nav Link Name & href connection to section
  a.classList.add("menu__link");
  a.setAttribute("href", `#${sectionId}`);
  a.setAttribute("data-nav", `${sectionId}`);
  a.innerText = navName;

  //pass Li Element (Nav Link) into Ul in html
  li.appendChild(a);
  navBar.appendChild(li);
  console.log("- navBar", navBar);
});

// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", function () {
  //checking on scroll if is in vieport
  sections.forEach((element, index) => {
    const activeLink = element.getBoundingClientRect();
    let activeLink2 = navBar.querySelector(`[data-nav=${element.id}]`);

    //if in viewport add or remove active class
    if (activeLink.top <= 50 && activeLink.bottom >= 50) {
      element.classList.add("your-active-class");
      activeLink2.classList.add("active-link");
    } else {
      element.classList.remove("your-active-class");
      activeLink2.classList.remove("active-link");
    }
  });
});

// Scroll to anchor ID using scrollTO event

//selects a elements with href attributes
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //adds event listener to above selected elements
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    //scrolls to clicked a element which is selected above
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    console.log("- this", this);
  });
});

// Hide navbar when scrolling
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar__list").style.display = "block";
  } else {
    document.getElementById("navbar__list").style.display = "none";
  }

  //reset again when not scrolling to again check when next scroll is happening
  prevScrollpos = currentScrollPos;
};

//notification when subscribed
const subscribeBtn = document.querySelector(".news__btn");

subscribeBtn.addEventListener("click", notify)

function notify() { alert("You subscribed :)") }
