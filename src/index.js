import createHome from "./home";
import createMenu from "./menu";
import createAbout from "./about";

const contentDiv = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", () => createHome(contentDiv));

const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", () => createMenu(contentDiv));

const aboutBtn = document.querySelector("#about-btn");
aboutBtn.addEventListener("click", () => createAbout(contentDiv));
