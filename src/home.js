import "./style.css";
import restaurantImg from "./fine-dining.png";

function createHome(contentDiv) {
  const pairDiv = createDiv("intro-img-pair");
  const textDiv = createDiv("text-content");

  const heading = createHeading(
    "h2",
    "Why Eat Like a Giant When You Can Dine Like a Miniature?"
  );

  const para = createPara(`
            Welcome to <strong>Mini Munchies</strong>, where the food is small,
            but the experience is monumental. Forget big portions, because here,
            every dish is a bite. Or maybe even half a bite. It's about time we
            broke free from the shackles of traditional dining with plates you
            need two hands to carry. At <strong>Mini Munchies</strong>, we
            believe in efficiency – one bite, one flavor explosion. It’s dining
            without commitment!`);

  const img = createImg(restaurantImg);

  textDiv.append(heading, para);
  pairDiv.append(textDiv, img);
  contentDiv.innerHTML = "";
  contentDiv.appendChild(pairDiv);
}

function createDiv(id) {
  const div = document.createElement("div");
  div.setAttribute("id", id);
  return div;
}

function createHeading(heading, text) {
  const head = document.createElement(heading);
  head.textContent = text;
  return head;
}

function createPara(text) {
  const para = document.createElement("p");
  para.innerHTML = text;
  return para;
}

function createImg(img) {
  const image = document.createElement("img");
  image.src = img;
  return image;
}

export { createHome as default, createDiv, createHeading, createPara };
