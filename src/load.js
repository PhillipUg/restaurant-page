import createMenu from './menu';
import createFooter from './footer';
import createNav from './nav';

function init() {
  const content = document.querySelector('.content');
  content.classList.add('pop7');

  const footer = createFooter();
  const container = createMenu();
  const navbar = createNav();

  content.appendChild(navbar);
  content.appendChild(container);
  content.appendChild(footer);
}

export default init;