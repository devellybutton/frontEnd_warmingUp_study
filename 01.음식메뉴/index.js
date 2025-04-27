import menu from "./data.js";

// innerHTML로 만들기
// 메뉴 HTML DOM 요소 생성
const createMenuItem = (menuItem) => {
  const article = document.createElement("article");
  article.classList.add("menu-item");
  article.id = `menu-item-${menuItem.id}`;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const img = document.createElement("img");
  img.src = menuItem.image;
  img.alt = menuItem.title;

  imageContainer.appendChild(img);

  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");

  const titlePriceContainer = document.createElement("div");
  titlePriceContainer.classList.add("title-price");

  const title = document.createElement("h3");
  title.classList.add("menu-title");
  title.innerHTML = menuItem.title;

  const price = document.createElement("p");
  price.classList.add("menu-price");
  price.textContent = menuItem.price;

  titlePriceContainer.appendChild(title);
  titlePriceContainer.appendChild(price);

  const hr = document.createElement("hr");

  const description = document.createElement("p");
  description.classList.add("menu-description");
  description.innerHTML = menuItem.desc;

  detailsContainer.appendChild(titlePriceContainer);
  detailsContainer.appendChild(hr);
  detailsContainer.appendChild(description);

  article.appendChild(imageContainer);
  article.appendChild(detailsContainer);

  return article;
};

// 생성한 메뉴를 집어넣기
const insertMenuItem = (menuItems) => {
  const menuContainer = document.getElementById("menu-container");
  menuContainer.innerHTML = "";

  menuItems.forEach((menuItem) => {
    const menuItemElement = createMenuItem(menuItem);
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
      insertMenuItem(wrapMenus);
      break;
    case "alcohol": // 주류
      const alcoholMenus = menu.filter((item) => item.category === "alcohol");
      insertMenuItem(alcoholMenus);
    default:
      break;
  }
};

document.querySelectorAll(".category-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const category = e.currentTarget.id; // id값을 카테고리에 넣어서 필터링함.
    filterMenuItems(category);
  });
});

insertMenuItem(menu);

// 주류 클릭시 알림창 뜸.
const alcoholLink = document.getElementById("alcohol");

alcoholLink.addEventListener("click", function (e) {
  e.preventDefault();
  alert("주류는 19세 이상만 구매 가능합니다!");
});
