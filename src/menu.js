import "./style.css";
import { createDiv, createHeading, createPara } from "./home";

function createMenu() {
  const contentDiv = document.querySelector("#content");
  const mainHeading = createHeading("h2", "Featured Menu Items");
  const menuGrid = createDiv("menu-grid");
  const burgerCard = createCard(
    "The 2-Bite Burger",
    `Bigger is overrated. So is being able to hold your burger in one
    hand. Our 2-bite burger combines the finest beef (or tofu, we don’t
    judge) with premium toppings—just small enough to not overwhelm your
    taste buds. How much can you really savor in a full-size burger,
    anyway?`
  );
  const shrimpCard = createCard(
    "The Shrimp Snack (Not Quite a Skewer, Not Quite a Bite)",
    `Why do you need a skewer when you can have a shrimp the size of a
    thumb? Dive into the world of seafood, but with no effort!`
  );
  const tacoCard = createCard(
    "Tiny Tacos (One Bite, One Decision)",
    `Who needs multiple tacos when one little bite can carry all the
    flavor you crave? Need a second one? Too bad, they're just <em>too
    tiny</em> to come in multiples. You’re here for the challenge!`
  );
  const friesCard = createCard(
    "Teeny Tiny Fries",
    `Forget sharing! These fries are so small, you'll eat them faster
    than you can find someone to argue with about portion sizes. A truly
    liberating experience in "french fry liberation."`
  );

  menuGrid.append(burgerCard, shrimpCard, tacoCard, friesCard);
  contentDiv.innerHTML = "";
  contentDiv.append(mainHeading, menuGrid);
}

function createCard(headText, desc) {
  const head = createHeading("h3", headText);
  const descP = createPara(desc);
  const card = document.createElement("div");
  card.classList.add("card");
  card.append(head, descP);
  return card;
}

export { createMenu as default };
