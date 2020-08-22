const createNav = () => {
  const tabsArr = ['HOME', 'MENU', 'CONTACT &nbsp;&nbsp;&nbsp; US'];

  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');

  const logoText = document.createElement('div');
  logoText.classList.add('logo-text');
  logoText.innerHTML = "PHIL'S<br>CAVE";

  const tabs = document.createElement('div');
  tabs.classList.add('tabs');

  for (let i = 0, j = tabsArr.length; i < j; i += 1) {
    const tab = document.createElement('button');
    tab.classList.add('tab');
    tab.innerHTML = tabsArr[i];
    tabs.appendChild(tab);
  }

  navbar.appendChild(logoText);
  navbar.appendChild(tabs);

  return navbar;
};


export default createNav;