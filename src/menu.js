const createMenuItem = (name, description) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;

  const foodImage = document.createElement('img');
  // foodImage.src = `images/food/${name.toLowerCase()}.jpg`;
  foodImage.src = `images/food/${name.toLowerCase()}.jpg`;
  // foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
};

const createMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createMenuItem(
      'Tilapia',
      'Wet Fried fish straight from the Lake Victoria.',
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Chicken', 'Served with chips, ugali or rice.',
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Nyama Choma',
      'Served with ugali, chips and preferred to have kachumbari.',
    ),
  );

  menu.appendChild(
    createMenuItem(
      'Githeri',
      'This is a traditional food from Central people in Kenyan country.',
    ),
  );

  menu.appendChild(
    createMenuItem(
      'Chapati',
      'Served with any stew, mostly beef or checken stew.',
    ),
  );

  menu.appendChild(
    createMenuItem(
      'Ugali',
      "This is Kenya's staple food. Mostly served with stews like beef, chicken or fish.",
    ),
  );

  return menu;
};

const loadMenu = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
};

export default loadMenu;
