const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const topBtn = document.querySelector(".topBtn a");

// arrow up
topBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// header
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    header.classList.toggle('header--active', scrollY > headerHeight);
    topBtn.classList.toggle("active", scrollY > headerHeight);
});