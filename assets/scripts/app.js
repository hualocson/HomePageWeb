const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerList = $$(".header__list-item");

// headerList.forEach((item) => {
//   item.firstElementChild.onclick = function () {
//     $(".menu__link-item.header__item--active").classList.remove(
//       "header__item--active"
//     );
//     item.classList.add("header__item--active");
//   };
// });

const sections = $$("section");
const headerHeight = 200;
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset > sectionTop) {
      current = section.getAttribute("id");
    }
    headerList.forEach((item) => {
      const href = item.firstElementChild.getAttribute("href").replace("#", "");
      if (href === current) item.classList.add("header__item--active");
      else item.classList.remove("header__item--active");
    });
  });
});
