// script.js

document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname; // Get the current page URL
  
    // Define your navigation links by their IDs
    var homeLink = document.getElementById("home-link");
    var coinLink = document.getElementById("coin-link");
    var dateLink = document.getElementById("date-link");
    var independenceLink = document.getElementById("independence-link");
    var canadianLink = document.getElementById("canadian-link");
    var placesLink = document.getElementById("places-link");
    var favsitesLink = document.getElementById("favsites-link");
  
    // Remove the "href" attribute for the current page and apply a CSS class to gray it out
    if (currentPage.includes("test.html")) {
      homeLink.removeAttribute("href");
      homeLink.classList.add("current-page");
    } else if (currentPage.includes("coin.html")) {
      coinLink.removeAttribute("href");
      coinLink.classList.add("current-page");
    } else if (currentPage.includes("currentdate.html")) {
      dateLink.removeAttribute("href");
      dateLink.classList.add("current-page");
    } else if (currentPage.includes("independenceDay.html")) {
      independenceLink.removeAttribute("href");
      independenceLink.classList.add("current-page");
    } else if (currentPage.includes("canadian.html")) {
      canadianLink.removeAttribute("href");
      canadianLink.classList.add("current-page");
    } else if (currentPage.includes("3places.html")) {
      placesLink.removeAttribute("href");
      placesLink.classList.add("current-page");
    } else if (currentPage.includes("favsites.html")) {
      favsitesLink.removeAttribute("href");
      favsitesLink.classList.add("current-page");
    }
  });
  