const starterDishes = [
  { name: 'Ensalada de marisco', price: 12 },
  { name: 'Sopa de pescado', price: 8 },
  { name: 'Tortilla de bacalao', price: 9 },
];
const mainDishes = [
  { name: 'Txangurro al horno', price: 17 },
  { name: 'Txuleta a la brasa', price: 45 },
  { name: 'Berenjena rellena de verduras y ricotta', price: 15 },
];
const dessertDishes = [
  { name: 'Tarta de manzana', price: 8 },
  { name: 'Cuajada casera', price: 6 },
  { name: 'Torrija con helado', price: 10 },
];

export function menuLoad() {
  const content = document.querySelector('#content');
  const menuContainer = document.createElement('div');
  menuContainer.className = `menu-container`;

  const menu = document.createElement('div');
  menu.className = 'centered-container';

  const menuHeader = document.createElement('h1');
  menuHeader.textContent = `Our Menu`;

  menu.appendChild(menuHeader);
  content.appendChild(menuContainer);

  const menuSections = ['starters', 'mains', 'desserts'];

  menuSections.forEach((element) => {
    const section = document.createElement('div');
    section.classList = `${element} centered-container`;

    const header = document.createElement('h2');
    header.textContent = element.toUpperCase();

    section.appendChild(header);
    menu.appendChild(section);
  });
  menuContainer.appendChild(menu);
  loadSection('starters', starterDishes);
  loadSection('mains', mainDishes);
  loadSection('desserts', dessertDishes);
}
menuLoad();

function loadSection(menuSection, dishes) {
  const section = document.querySelector(`.${menuSection}`);

  dishes.forEach((item) => {
    const dish = document.createElement('div');
    dish.textContent = `${item.name} - ${item.price} €`;

    section.appendChild(dish);
  });
}
