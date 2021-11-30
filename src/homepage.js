import Icon from "./img/homeIMG.jpeg";

function createButton(info, iden) {
  const button = document.createElement("button");
  button.innerHTML = info;
  button.classList.add(iden);
  return button;
}

function createTitle(div) {
  const title = document.createElement("div");
  title.id = "title";
  title.innerHTML = `Bob's Lounge!`;
  div.appendChild(title);
}

function createMenu(div) {
  const menu = document.createElement("div");
  menu.id = "menu";
  menu.appendChild(createButton("Home", "home"));
  menu.appendChild(createButton("Menu", "menu"));
  menu.appendChild(createButton("About", "about"));
  div.appendChild(menu);
}

function createFiller() {}

function createFooter() {}

function compile(div) {
  createTitle(div);
  createMenu(div);
  createFiller();
  createFooter();
}

export { compile };
