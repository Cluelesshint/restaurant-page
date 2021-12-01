import Icon from "./img/logo.png";

function createHeader(div) {
  const header = document.createElement("header");
  header.id = "header";
  const logo = new Image();
  logo.src = Icon;
  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerHTML = `Bob's Bar Food`;
  const nav = createNav();
  header.appendChild(logo);
  header.appendChild(title);
  header.appendChild(nav);
  div.appendChild(header);
}

function createButton(iden, text) {
  const button = document.createElement("button");
  button.classList.add(iden);
  button.innerHTML = text;
  return button;
}

function createNav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.classList.add("nav_links");
  const buttonHome = createButton("home", "Home");
  const buttonMenu = createButton("menu", "Menu");
  const buttonAbout = createButton("about", "About");
  ul.appendChild(buttonHome);
  ul.appendChild(buttonMenu);
  ul.appendChild(buttonAbout);
  return nav.appendChild(ul);
}

function createBigContent(div) {
  const big = document.createElement("div");
  big.id = "big-content";
  const content = document.createElement("div");
  content.classList.add("content1");
  big.appendChild(content);
  div.appendChild(big);
}

function createFooter(div) {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const para = document.createElement("p");
  para.innerHTML = "Enjoy these delicious food items COPYRIGHT 2021";
  footer.appendChild(para);
  div.appendChild(footer);
}

function compile(div) {
  createHeader(div);
  createBigContent(div);
  createFooter(div);
}

export { compile };
