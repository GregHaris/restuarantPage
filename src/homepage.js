import HomePageImage from "./img/restuarantHomepage.jpg";

//restuarant home page
const createElementWithText = (tagName, text, className) => {
  const element = document.createElement(tagName);
  element.textContent = text;
  if (className) element.classList.add(className);
  return element;
};

const createImageElement = (src, alt, className) => {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  if (className) image.classList.add(className);
  return image;
};

const createRestaurantHomePage = () => {
  const contentDiv = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // Create and append the headline
  const headline = createElementWithText(
    "h1",
    "Welcome to our restaurant",
    "headline"
  );
  pageContent.appendChild(headline);

  // Create and append the homepage image
  const image = createImageElement(
    HomePageImage,
    "Restaurant home page image",
    "home-page-image"
  );
  pageContent.appendChild(image);

  // Create and append copy element (home page text)
  const copy = createElementWithText(
    "p",
    "We are always happy to serve you. We are here because of you. Come have a taste of our food and join the millions who spread the good news of we being the best at what we do",
    "home-page-copy"
  );

  pageContent.appendChild(copy);

  contentDiv.appendChild(pageContent);
};

createRestaurantHomePage();

export default createRestaurantHomePage;
