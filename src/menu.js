import burger from "./img/hamburger.png";
import chicken from "./img/chicken-leg.png";
import hotdog from "./img/fast-food.png";
import pizza from "./img/pizza.png";
import alcohol from "./img/alcoholic.png";
import coffee from "./img/coffee-mug.png";

function cardMaker(name, price, clas, image) {
  const card = document.createElement("div");
  card.id = "card";
  const title = document.createElement("h2");
  title.innerHTML = name;
  const num = document.createElement("h4");
  num.innerHTML = price;
  const img = new Image();
  img.src = image;
  img.classList.add(clas);
  card.appendChild(title);
  card.appendChild(num);
  card.appendChild(img);
  return card;
}

function compileMenu() {
  const content = document.createElement("div");
  content.id = "big-content";
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");
  const cardBurger = cardMaker("Hamburger", "$5.99", "food", burger);
  const cardChicken = cardMaker("Chicken Leg", "$2.99", "food", chicken);
  const cardHotdog = cardMaker("Hotdog", "$3.25", "food", hotdog);
  const cardPizza = cardMaker("Pizza", "$4.99", "food", pizza);
  const cardAlcohol = cardMaker("Alcohol", "$8.99", "food", alcohol);
  const cardCoffee = cardMaker("Coffee", "$1.99", "food", coffee);
  content.appendChild(menuPage);
  menuPage.appendChild(cardBurger);
  menuPage.appendChild(cardChicken);
  menuPage.appendChild(cardHotdog);
  menuPage.appendChild(cardPizza);
  menuPage.appendChild(cardAlcohol);
  menuPage.appendChild(cardCoffee);
  return content;
}

export { compileMenu };
