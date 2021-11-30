import Icon from "./img/homeIMG.jpeg";

function createButton(info, iden) {
  const button = document.createElement("button");
  button.innerHTML = info;
  button.classList.add(iden);
  return button;
}

function createBlockText(text, iden) {
  const block = document.createElement("h3");
  block.innerHTML = text;
  block.classList.add(iden);
  return block;
}

function createTitle(div) {
  const title = document.createElement("h1");
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

function createFiller(div) {
  const filler = document.createElement("div");
  filler.id = "filler";
  const fill = document.createElement("h3");
  fill.innerHTML =
    "Please enjoy our healthy meals!  We have a wide selection to choose so please choose wisely";
  fill.classList.add("fillerOne");
  filler.appendChild(fill);
  div.appendChild(filler);
}

function createFooter() {}

function compile(div) {
  createTitle(div);
  createMenu(div);
  createFiller(div);
  createFooter();
}

export { compile };
