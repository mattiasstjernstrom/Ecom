document.addEventListener("DOMContentLoaded", () => {
  const searchScroll = document.querySelector("#search-scroll");
  const searchLink = document.querySelector("#search-link");
  const searchInput = document.querySelector("#search-input");
  /* Rolldown for search */
  searchLink.addEventListener("click", (event) => {
    event.preventDefault();
    if (searchScroll.style.display === "block") {
      searchScroll.style.animation = "roll-up 0.5s ease-in-out forwards";
      setTimeout(() => {
        searchScroll.style.display = "none";
        searchScroll.removeAttribute("style");
        searchInput.removeAttribute("style");
        searchInput.blur();
      }, 400);
      return;
    }
    event.preventDefault();
    searchScroll.style.display = "block";
    searchScroll.style.animation = "roll-down 0.5s ease-in-out forwards";
    setTimeout(() => {
      searchInput.focus();
    }, 400);
  });
  /* /Rolldown for search */

  /* Search form */
  const searchForm = document.querySelector("#search-form");
  const closeSearch = document.querySelector("#search-close");
  closeSearch.addEventListener("click", (event) => {
    if (searchInput.value === "") {
      closeSearch.classList.add("svg-stroke");
      event.preventDefault();
      searchScroll.style.animation = "roll-up 0.5s ease-in-out forwards";
      setTimeout(() => {
        searchScroll.style.display = "none";
        searchScroll.removeAttribute("style");
        searchInput.removeAttribute("style");
        searchInput.blur();
      }, 400);
    } else {
      closeSearch.classList.remove("svg-stroke");
      searchInput.value = "";
      closeSearch.style.stroke = "#ccc";
      searchForm.classList.remove("error");
      closeSearch.classList.remove("pulse");
      closeSearch.removeAttribute("style");
      searchInput.focus();
    }
  });
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    /* Validation */
    inputError(searchInput);
    closeSearch.style.stroke = "#ff0000";
    closeSearch.classList.add("pulse");

    searchInput.addEventListener("input", () => {
      searchForm.classList.remove("error");
      closeSearch.classList.remove("pulse");
      closeSearch.removeAttribute("style");
    });
  });
  /* /Search form */

  /* Input validation error function */
  const inputError = (input) => {
    searchForm.classList.add("error");
  };
});
