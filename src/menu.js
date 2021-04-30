const createMenu = () => {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.appendChild(
    createMenuItem(
      'Tilapia Fish',
      'Wet Fried fish straight from the Lake Victoria.',
    ),
  );
  menu.appendChild(
    createMenuItem('Fried Chicken', 'Served with chips, ugali or rice.'),
  );
  menu.appendChild(
    createMenuItem(
      'Nyama Choma',
      'Served with ugali, chips and preferred to have kachumbari.',
    ),
  );
  menu.appendChild(
    createMenuItem(
      'Pilau',
      'Prefers to be served plain with cold Soda but most prefer stew.',
    ),
  );
  menu.appendChild(createMenuItem('Githeri', 'Served as a whole meal.'));
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
}

const createMenuItem = (name, description) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const foodName = document.createElement('h2');
  foodName.textContent = name;

  const foodDescription = document.createElement('p');
  foodDescription.textContent = description;

  const foodImage = document.createElement('img');
  foodImage.src = `images/food${name.toLowerCase()}.jpg`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

const loadMenu = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createMenu());
}

export default loadMenu;
