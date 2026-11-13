const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
const topBtn = document.querySelector(".topBtn a");

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

// menu-btn
{
    const menus = document.querySelectorAll('.header__menu a');
    const menuBtn = document.querySelector('.menu-btn');


    const toggleMenu = (isOpen) => {
        menuBtn.setAttribute('aria-expanded', isOpen);
        menuBtn.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
    };

    menuBtn.addEventListener('click', () => {
         const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';

         console.log(isOpen)
         toggleMenu(!isOpen);
    });

    menus.forEach(menu => {
        menu.addEventListener('click', (event) => {
            event.preventDefault();
            
            const href = menu.getAttribute('href');
            const target = document.querySelector(href);
            const top = target.getBoundingClientRect().top + scrollY

            window.scrollTo({
                top: top - headerHeight - headerHeight/2,
                behavior: 'smooth'
            });

            toggleMenu(false);
        })
    });
}


// taste
{

    const taste = document.querySelector('.taste__inner');
    const list = taste.querySelector(".taste__list");
    const tabs = taste.querySelectorAll(".taste__tab");
    const items = taste.querySelectorAll(".taste__item");

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
    });

}




