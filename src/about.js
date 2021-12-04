function createAbout() {
  const content = document.createElement("div");
  content.id = "big-content";
  const info = document.createElement("div");
  info.classList.add("about-info");
  const para = document.createElement("para");
  para.innerHTML =
    "We come from a long line of hard workers who work hard only for you!  Good food too!  Greasy!";
  para.classList.add("para-ab");
  info.appendChild(para);
  content.appendChild(info);

  let hey = "hey";
  return content;
}

function compileAbout() {
  const content = createAbout();
  return content;
}

export { compileAbout };
