"use strict";

(function () {
  var toggle = document.querySelector(".menu-toggle");
  var navigation = document.getElementById("primary-nav");
  var year = document.getElementById("copyright-year");

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (!toggle || !navigation) return;

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Otwórz menu");
    navigation.classList.remove("is-open");
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Otwórz menu" : "Zamknij menu");
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", function (event) {
    if (!navigation.contains(event.target) && !toggle.contains(event.target)) {
      closeMenu();
    }
  });
})();
