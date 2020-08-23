const createMenu = () => {
  const container = document.createElement('main');
  container.classList.add('container');

  const popUp1 = document.createElement('div');
  popUp1.classList.add('pop', 'pop-up1');
  popUp1.innerHTML = "<h1>WELCOME!</h1><h2>Phil's Cave,<br>Fast Foods<br>Done Right.</h2><p>Join us for your next meal, we get the juices flowing!</p>";
  const popUp2 = document.createElement('div');
  popUp2.classList.add('pop', 'pop-up2');
  const popUp3 = document.createElement('div');
  popUp3.classList.add('pop', 'pop-up3');
  const addressTitle = document.createElement('h1');
  addressTitle.classList.add('address-title');
  addressTitle.innerHTML = 'Come and visit Us';
  const address = document.createElement('div');
  address.classList.add('address');
  address.innerHTML = '<p>plot 99,</p><p>Kampala Street,</p><p>Kampala road.</p><p>Kampala, Uganda.</p><p>Tel: +256780056784</p>';

  const map = document.createElement('div');
  map.id = 'map';
  const popUp = document.createElement('div');
  popUp.classList.add('pop-up');
  const h1 = document.createElement('h1');
  h1.innerText = 'WHAT WE SERVE';


  const meals = ['Burger King', 'Street Nugget', 'Pompus Pirate', 'Homeless Piper', 'Julius Ceasorous', "Coder's Paradise"];

  for (let i = 1; i < 7; i += 1) {
    const popItems = document.createElement('div');
    popItems.classList.add('pop-items');
    const popTitle = document.createElement('div');
    popTitle.classList.add('pop-title', `pop${i}`);
    const popInfo = document.createElement('div');
    popInfo.classList.add('pop-info');
    const meal = document.createElement('h3');
    meal.innerText = `${meals[i - 1]}`;
    const price = document.createElement('p');
    price.innerText = `$${Math.floor(Math.random() * (40 - 20) + 20)}`;
    popInfo.appendChild(meal);
    popInfo.appendChild(price);
    popItems.appendChild(popTitle);
    popItems.appendChild(popInfo);
    popUp.appendChild(popItems);
  }

  popUp3.appendChild(addressTitle);
  popUp3.appendChild(address);
  popUp3.appendChild(map);
  popUp2.appendChild(h1);
  popUp2.appendChild(popUp);
  container.appendChild(popUp1);
  container.appendChild(popUp2);
  container.appendChild(popUp3);
  return container;
};


export default createMenu;