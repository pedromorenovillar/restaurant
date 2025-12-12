export function pageLoad() {
  const content = document.querySelector('#content');
  const restName = document.createElement('div');
  restName.id = 'restaurant-name';
  const h1 = document.createElement('h1');
  h1.textContent = `Martuteneko Jatextea`;

  restName.appendChild(h1);

  const restIntro = document.createElement('div');
  restIntro.className = 'restaurant-intro';
  const p1 = document.createElement('p');
  p1.textContent = `Welcome to Martuteneko Jatetxea, a cozy corner where tradition meets flavor in the heart of the Basque Country. Our kitchen celebrates seasonal ingredients, local producers, and the timeless recipes that make Basque gastronomy world‑renowned. Whether you’re joining us for a casual lunch, a family gathering, or a special evening, we invite you to savor dishes crafted with care and passion.`;

  const p2 = document.createElement('p');
  p2.textContent = `Come in, take a seat, and let Martuteneko Jatetxea be your home for unforgettable meals and warm hospitality.`;
  restIntro.appendChild(p1);
  restIntro.appendChild(p2);

  content.appendChild(restName);
  content.appendChild(restIntro);
}
pageLoad();
