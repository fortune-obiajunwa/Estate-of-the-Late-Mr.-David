
/* =========================================
   DAVID ESTATE MANAGEMENT PORTAL
   Main JavaScript
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileNav = document.getElementById("mobileNav");

if (mobileMenuButton && mobileNav) {

  const menuBars = mobileMenuButton.querySelectorAll("span");

  mobileMenuButton.addEventListener("click", () => {

    const isOpen = mobileNav.classList.toggle("active");

    mobileMenuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    /* Turn hamburger into X */
    if (isOpen) {

      menuBars[0].style.transform =
        "rotate(45deg) translate(4px, 4px)";

      menuBars[1].style.opacity = "0";

      menuBars[2].style.transform =
        "rotate(-45deg) translate(4px, -4px)";

      mobileMenuButton.setAttribute(
        "aria-label",
        "Close navigation menu"
      );

    } else {

      menuBars[0].style.transform = "none";

      menuBars[1].style.opacity = "1";

      menuBars[2].style.transform = "none";

      mobileMenuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
      );
    }
  });


  /* Close the mobile menu after selecting a section */

  const mobileLinks = mobileNav.querySelectorAll("a");

  mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mobileNav.classList.remove("active");

      mobileMenuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuBars[0].style.transform = "none";

      menuBars[1].style.opacity = "1";

      menuBars[2].style.transform = "none";

      mobileMenuButton.setAttribute(
        "aria-label",
        "Open navigation menu"
      );

    });

  });

}


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


/* =========================================
   HEADER SHADOW ON SCROLL
========================================= */

const header = document.querySelector(".site-header");

if (header) {

  const updateHeader = () => {

    if (window.scrollY > 10) {

      header.style.boxShadow =
        "0 5px 20px rgba(16, 36, 62, 0.06)";

    } else {

      header.style.boxShadow =
        "0 2px 8px rgba(11, 29, 51, 0.05)";
    }

  };

  window.addEventListener("scroll", updateHeader);

  updateHeader();
}


/* =========================================
   SIMPLE IMAGE ERROR HANDLING
========================================= */

const propertyImages = document.querySelectorAll(
  ".property-image img"
);

propertyImages.forEach((image) => {

  image.addEventListener("error", () => {
    image.style.display = "none";
  });

});

