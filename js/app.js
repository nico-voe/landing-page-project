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
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

sections.forEach((element, index) => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const navName = section[index].getAttribute("data-nav");
  const sectionId = element.id;

  a.classList.add("menu__link");
  a.setAttribute("href", `#${sectionId}`);
  a.setAttribute("data-nav", `${sectionId}`);

  a.innerText = navName;
  li.appendChild(a);
  navBar.appendChild(li);
  console.log("- navBar", navBar);
});

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", function () {
  sections.forEach((element, index) => {
    const activeLink = element.getBoundingClientRect();
    let activeLink2 = navBar.querySelector(`[data-nav=${element.id}]`);
    if (activeLink.top <= 50 && activeLink.bottom >= 50) {
      element.classList.add("active");
      activeLink2.classList.add("active-link");
    } else {
      element.classList.remove("active");
      activeLink2.classList.remove("active-link");
    }
  });
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
