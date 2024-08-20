const createTabs = (() => {
  const navBar = document.querySelector("nav");

  const homeBtn = document.createElement("button");
  const menuBtn = document.createElement("button");
  const contactBtn = document.createElement("button");

  homeBtn.setAttribute("id", "homeBtn");
  menuBtn.setAttribute("id", "menuBtn");
  contactBtn.setAttribute("id", "contact");

  homeBtn.classList.add("tab");
  menuBtn.classList.add("tab");
  contactBtn.classList.add("tab");

  navBar.append(homeBtn, menuBtn, contactBtn)
})();

export default createTabs;
