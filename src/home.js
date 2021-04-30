const createParagraph = (text) => {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

const createHome = () => {
  const home = document.createElement('div');
  home.classList.add('home');

  home.appendChild(createParagraph('Best african food in Kenya'));
  home.appendChild(createParagraph('Made with love'));
  home.appendChild(createParagraph('Order online or visit us!'));

  return home;
}

const  loadHome = () => {
  const main = document.getElementById('main');
  main.textContent = '';
  main.appendChild(createHome());
}

export default loadHome;
