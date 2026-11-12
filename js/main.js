const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const topBtn = document.querySelector(".topBtn a");
const tasteTabs = document.querySelectorAll(".taste__tab button");
const tasteList = document.querySelector(".taste__list");
const tasetItems = document.querySelectorAll(".taste__item");

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

// taste
tasteTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.tab;

        tasteTabs.forEach(item => {item.classList.remove('active')});
        tasetItems.forEach(item => {item.classList.remove('active')});
        
        tab.classList.add('active');

        const contents = document.querySelector(`.taste__item[data-content="${target}"]`);
        contents.classList.add('active');

        tasteList.className = `taste__list ${target}`;
    });
});

//컨텐츠 클릭 시 활성화,,