import { compileHome } from "./homepage.js";
import { compileMenu } from "./menu.js";
import "./style.css";

const content = document.getElementById("content");

compileHome(content);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
  });
});

//compileMenu(content);
