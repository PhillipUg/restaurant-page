const createNav = () => {
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const logo = document.createElement('div');
  logo.classList.add('logo');

  const logoText = document.createElement('div');
  logoText.classList.add('logo-text');
  logoText.innerHTML = "PHIL'S<br>CAVE";

  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  const tab1 = document.createElement('button');
  tab1.classList.add('tab');
  tab1.innerText = 'HOME';

  const tab2 = document.createElement('button');
  tab2.classList.add('tab');
  tab2.innerText = 'MENU';

  const tab3 = document.createElement('button');
  tab3.classList.add('tab');
  tab3.innerHTML = 'CONTACT &nbsp;&nbsp;&nbsp; US';

  tabs.appendChild(tab1);
  tabs.appendChild(tab2);
  tabs.appendChild(tab3);
  navbar.appendChild(logo);
  navbar.appendChild(logoText);
  navbar.appendChild(tabs);

  return navbar;
};


export default createNav;