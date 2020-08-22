import { createMenu } from './menu.js';
import { createFooter } from './footer.js';
import { createNav } from './nav.js';

export function init(){
const content = document.querySelector(".content");
content.classList.add("pop7");

const footer = createFooter();
const container = createMenu();
const navbar = createNav();

content.appendChild(navbar);
content.appendChild(container);
content.appendChild(footer);
};