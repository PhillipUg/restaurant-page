import init from './load';


window.onload = init();

const deactivate = (item1, item2) => {
  item1.classList.remove("active");
  item2.style.display = 'none';
}

const activate = (item1, item2) => {
  item1.classList.add("active");
  item2.style.display = 'block';
}

const tabz = document.querySelector('.tabs');
const tabzContent = document.querySelector('.container');

const tabsArray = [...tabz.children];
const panels = [...tabzContent.children];

panels.forEach((panel,index) => {
  panel.style.display = "none";
  if (index === 0) {
    panels[0].style.display = "block";
  }
});




tabsArray.forEach((tab, index) => {
  if (index === 0) {
    tabsArray[0].classList.add("active");
  }
  tab.addEventListener('click', (e) => {
    if (e.currentTarget === tabsArray[0]) {
      activate(tabsArray[0], panels[0])
      deactivate(tabsArray[1], panels[1]);
      deactivate(tabsArray[2], panels[2]);
    } else if (e.currentTarget === tabsArray[1]) {
      activate(tabsArray[1], panels[1])
      deactivate(tabsArray[0], panels[0]);
      deactivate(tabsArray[2], panels[2]);
    } else if (e.currentTarget === tabsArray[2]) {
      activate(tabsArray[2], panels[2])
      deactivate(tabsArray[1], panels[1]);
      deactivate(tabsArray[0], panels[0]);
    }
  });
});
