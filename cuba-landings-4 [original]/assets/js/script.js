/*-----------------------------------------------------------------------------------

 Template Name:
 Template URI: themes.pixelstrap.com/
 Description: This is Landing website
 Author: Pixelstrap
 Author URI: https://themeforest.net/user/pixelstrap

 ----------------------------------------------------------------------------------- 
    01. Loader js
    02. Tap to top js
    03. Navigation id js
*/

(function () {
  /*====================
        01. Loader js
    =======================*/

  const loader = document.querySelector(".loader-wrapper");

  function fadeIn() {
    loader.style.display = "block";
  }

  function fadeOut() {
    loader.style.display = "none";
  }

  setTimeout(fadeIn, 1000);
  setTimeout(fadeOut, 1020);

  /*====================
        02. Tap to top js
    =======================*/

  const button = document.querySelector(".tap-top");

  const displayButton = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        button.style.display = "block";
      } else {
        button.style.display = "none";
      }
    });
  };

  const scrollToTop = () => {
    button.addEventListener("click", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      console.log(event);
    });
  };

  displayButton();
  scrollToTop();

  /*====================
        03. Navigation id js
    =======================*/
  // Get all sections that have an ID defined
  const sections = document.querySelectorAll("section[id]");

  // Add an event listener listening for scroll
  window.addEventListener("scroll", navHighlighter);

  function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and ID values for each
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute("id");

      /*
            - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
            - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
            */
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".navigation a[href*=" + sectionId + "]")
          .classList.add("active");
      } else {
        document
          .querySelector(".navigation a[href*=" + sectionId + "]")
          .classList.remove("active");
      }
    });
  }
})();
