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

        topBtn.classList.toggle("active", scrollY > headerHeight);
      });