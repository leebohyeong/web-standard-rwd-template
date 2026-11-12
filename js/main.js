const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const topBtn = document.querySelector(".topBtn a");
const taste = document.querySelector('.taste__inner');
const list = taste.querySelector(".taste__list");
const tabs = taste.querySelectorAll(".taste__tab");
const items = taste.querySelectorAll(".taste__item");

topBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    header.classList.toggle('header--active', scrollY > headerHeight);
    topBtn.classList.toggle("active", scrollY > headerHeight);
});

const tabEvent = (value) => {
    tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.tab === value));
    items.forEach(item => item.classList.toggle('active', item.dataset.item === value));

    list.classList.remove('coffee', 'dessert', 'mood');
    list.classList.add(value);
}

taste.addEventListener('click', (event) => {
    const tab = event.target.closest('[data-tab]');
    const item = event.target.closest('[data-item]');

    if(tab) tabEvent(tab.dataset.tab);
    if(item) tabEvent(item.dataset.item);
})
