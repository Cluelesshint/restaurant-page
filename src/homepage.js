function createButton(info, iden) {
  const button = document.createElement("button");
  button.innerHTML = info;
  button.classList.add(iden);
  return button;
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
  createMenu(div);
  createFiller();
  createFooter();
}

export { compile };
