const filterSlide = document.querySelector(".b-filter-slide");
const filterBtn = document.querySelector(".b-filter");
const filterCloseBtn = document.querySelector(".b-filter-close-btn");

filterBtn.addEventListener("click", () => {
    filterSlide.classList.remove("d-none");
})

filterCloseBtn.addEventListener("click", () => {
    filterSlide.classList.add("d-none");
})