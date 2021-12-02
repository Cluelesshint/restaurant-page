import { compileHome, createBigContent, createFooter } from "./homepage.js";
import { compileMenu } from "./menu.js";
import { deleteAllContent } from "./delete-content.js";
import "./style.css";

const pageContent = document.querySelector("#content");
let homepageContent = compileHome(pageContent);
pageContent.appendChild(homepageContent);

let navLinks = document.querySelectorAll("button");

let homepageLink = navLinks[0];
let menuLink = navLinks[1];
let aboutUsLink = navLinks[2];

homepageLink.addEventListener("click", () => {
  const bigContent = document.getElementById("big-content");
  const foot = document.querySelector(".footer");
  const head = document.getElementById("grab");
  bigContent.remove();
  foot.remove();
  let homepage = createBigContent();
  head.appendChild(homepage);
  head.appendChild(createFooter());
  console.log("home");
  console.log(bigContent);
  console.log(head);
});

menuLink.addEventListener("click", () => {
  const bigContent = document.getElementById("big-content");
  const foot = document.querySelector(".footer");
  const head = document.getElementById("grab");
  bigContent.remove();
  foot.remove();
  let menuPage = compileMenu();
  head.appendChild(menuPage);
  head.appendChild(createFooter());
  console.log("menu");
});

aboutUsLink.addEventListener("click", () => {
  console.log("about");
});
