const createTabs = (() => {
  const navBar = document.querySelector("nav");

  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.id =  "homeBtn";
  menuBtn.id =  "menuBtn";
  contactBtn.id =  "contact";

  homeBtn.classList.add("tab");
  menuBtn.classList.add("tab");
  contactBtn.classList.add("tab");

  homeBtn.textContent = "Home";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact"

  navBar.append(homeBtn, menuBtn, contactBtn)
})();

export default createTabs;
