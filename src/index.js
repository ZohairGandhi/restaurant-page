import createHome from "./home";
import createMenu from "./menu";

const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", createHome);

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", createMenu);
