import menu from "./data.js";

// 메뉴 HTML DOM 요소 생성
const createMenuItem = (menuItem) => {
  const article = document.createElement("article");
  article.classList.add("menu-item");
  article.id = `menu-item-${menuItem.id}`;

  const img = document.createElement("img");
  img.src = menuItem.image;
  img.alt = menuItem.title;

  const title = document.createElement("h2");
  title.classList.add("menu-title");
  title.textContent = menuItem.title;

  const price = document.createElement("p");
  price.classList.add("menu-price");
  price.textContent = menuItem.price;

  const description = document.createElement("p");
  description.classList.add("menu-description");
  description.textContent = menuItem.desc;

  article.appendChild(img);
  article.appendChild(title);
  article.appendChild(price);
  article.appendChild(description);

  return article;
};

// 생성한 메뉴를 집어넣기
const insertMenuItem = (menuItems) => {
  const menuContainer = document.getElementById("menu-container");
  menuContainer.innerHTML = "";

  menuItems.forEach((menuItem) => {
    const menuItemElement = createMenuItem(menuItem);
    console.log("메뉴아이템", menuItemElement);
    menuContainer.appendChild(menuItemElement);
  });

  const main = document.querySelector("main");
  const nav = main.querySelector("#menu-nav");

  main.insertBefore(menuContainer, nav.nextSibling);
};

// 카테고리별 메뉴 분류
const filterMenuItems = (category) => {
  switch (category) {
    case "all": // 전체
      insertMenuItem(menu);
      break;
    case "bagel": // 베이글
      const bagelMenus = menu.filter((item) => item.category === "bagel");
      insertMenuItem(bagelMenus);
      break;
    case "sandwich": // 샌드위치
      const sandwichMenus = menu.filter((item) => item.category === "sandwich");
      insertMenuItem(sandwichMenus);
      break;
    case "wrap": // 랩
      const wrapMenus = menu.filter((item) => item.category === "wrap");
      console.log(wrapMenus);
      insertMenuItem(wrapMenus);
      break;
    default:
      break;
  }
};

document.querySelectorAll(".category-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.currentTarget.id;
    filterMenuItems(category);
    console.log(category);
  });
});
