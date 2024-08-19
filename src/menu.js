const createMenuPage = () => {
  const contentDiv = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.setAttribute("class", "page-content");

  const menuPgHeading = document.createElement("h1");
  menuPgHeading.setAttribute("class", "menu-page-heading");
  menuPgHeading.textContent = "Our Menu";

  const menuList = document.createElement("ul");
  menuList.setAttribute("class", "menu-list");
  const menuItem1 = document.createElement("li");
  menuItem1.textContent = "Spaghetti";
  const menuItem2 = document.createElement("li");
  menuItem2.textContent = "Taccos";
  const menuItem3 = document.createElement("li");
  menuItem3.textContent = "Pizza";
  const menuItem4 = document.createElement("li");
  menuItem4.textContent = "Alfredo";

  menuList.append(menuItem1, menuItem2, menuItem3, menuItem4);

  pageContent.append(menuPgHeading, menuList);

  contentDiv.appendChild(pageContent)
};

export default createMenuPage;
