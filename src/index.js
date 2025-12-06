import "./styles.css";
import "./normalize.css";
import { pageLoad } from "./home-load.js";
import { menuLoad } from "./menu-load.js";
import { aboutLoad } from "./about-load.js";

// DOM elemnents
const content = document.querySelector("#content")
const home = document.querySelector("#home")
const menu = document.querySelector("#menu")
const about = document.querySelector("#about")

home.addEventListener("click", () =>{
  clearContent()
  pageLoad()
})

menu.addEventListener("click", () =>{
  clearContent()
  menuLoad()
})

about.addEventListener("click", () =>{
  clearContent()
  aboutLoad()
})


function clearContent() {
  content.textContent = "";
}

clearContent()
menuLoad()