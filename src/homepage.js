import HomePageImage from "./img/restuarantHomepage.jpg";
//restuarant home page
const createRestaurantHomePage = () => {
  const contentDiv = document.querySelector("#content");
  const pageContent = document.createElement("div");
  pageContent.classList.add("page-content");

  // create and append the headline
  const headline = document.createElement("h1");
  headline.classList.add("headline");
  headline.textContent = "Welcome to our restaurant";
  pageContent.appendChild(headline);

  //create and append the homepage image
  const image = document.createElement("img");
  image.classList.add("home-page-image");
  image.src = HomePageImage;
  image.alt = "Resturant home page image";
  pageContent.appendChild(image);

  //create and append copy element (home page text)
  const copy = document.createElement("p");
  copy.classList.add("home-page-copy");
  copy.textContent =
    "We are always happy to serve you. We are here because of you. Come have a taste of our food and join the millions who spread the goodnews of we being the best at what we do";
  pageContent.appendChild(copy);

  contentDiv.appendChild(pageContent);
};

createRestaurantHomePage()

export default createRestaurantHomePage;
