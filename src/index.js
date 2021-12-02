import { compileHome, createBigContent, createFooter } from "./homepage.js";
import { compileMenu } from "./menu.js";
import { deleteContent } from "./delete-content.js";
import "./style.css";

const pageContent = document.querySelector("#content");
let homepageContent = compileHome(pageContent);
pageContent.appendChild(homepageContent);

let navLinks = document.querySelectorAll("button");

let homepageLink = navLinks[0];
let menuLink = navLinks[1];
let aboutUsLink = navLinks[2];

homepageLink.addEventListener("click", () => {
  deleteContent();
  let homepage = createBigContent();
  head.appendChild(homepage);
  head.appendChild(createFooter());
});

menuLink.addEventListener("click", () => {
  deleteContent();
  let menuPage = compileMenu();
  head.appendChild(menuPage);
  head.appendChild(createFooter());
});

aboutUsLink.addEventListener("click", () => {
  console.log("about");
});
