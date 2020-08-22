import { init } from './load.js';


window.onload = init();






const tabz = document.querySelector(".tabs");
const tabzContent = document.querySelector(".container");

let tabsArray = [...tabz.children];
let panels = [...tabzContent.children];

panels.forEach((panel, index) => {
  panel.style.display = "none"
  if (index == 0) {
    panels[0].style.display = "block"
  }
});

tabsArray.forEach((tab, index) => {
  if (index === 0) {
    tabsArray[0].classList.add("active");
  }
  tab.addEventListener('click', (e) => {
    if (e.currentTarget == tabsArray[0]) {
      tabsArray[0].classList.add("active");
      panels[0].style.display = "block";
      tabsArray[1].classList.remove("active");
      panels[1].style.display = "none";
      tabsArray[2].classList.remove("active");
      panels[2].style.display = "none";
    } else if (e.currentTarget == tabsArray[1]) {
      tabsArray[1].classList.add("active");
      panels[1].style.display = "block";
      tabsArray[0].classList.remove("active");
      panels[0].style.display = "none";
      tabsArray[2].classList.remove("active");
      panels[2].style.display = "none";
    } else if (e.currentTarget == tabsArray[2]) {
      tabsArray[2].classList.add("active");
      panels[2].style.display = "block";
      tabsArray[1].classList.remove("active");
      panels[1].style.display = "none";
      tabsArray[0].classList.remove("active");
      panels[0].style.display = "none";
    }
  });

});
