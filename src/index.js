import createHome from "./home";
import createMenu from "./menu";

const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", () => createHome(contentDiv));

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", () => createMenu(contentDiv));
