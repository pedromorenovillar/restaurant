const phone = '943 72 55 49';
const phoneIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>`;

const mapIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-map" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103M10 1.91l-4-.8v12.98l4 .8zm1 12.98 4-.8V1.11l-4 .8zm-6-.8V1.11l-4 .8v12.98z"/>
</svg>`;
const address = 'Tranbia Kalea 1, 20014 Donostia/San Sebastián';
const mapData = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8242502996172!2d-1.9562443231659632!3d43.297002075394786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51af9eca51bb3f%3A0xaf4b7159996f16f4!2sTranbia%20kalea%2C%201%2C%2020014%20Donostia%20%2F%20San%20Sebasti%C3%A1n%2C%20Gipuzkoa!5e0!3m2!1sen!2ses!4v1765037553636!5m2!1sen!2ses" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

export function aboutLoad() {
  const content = document.querySelector('#content');
  const aboutContainer = document.createElement('div');
  aboutContainer.classList = `about-container map-container`;

  const map = document.createElement('div');
  map.className = 'map';
  map.innerHTML = mapData;

  let telephone = document.createElement('div');
  telephone.className = 'phone-details';

  let telIcon = document.createElement('div');
  telIcon.innerHTML = phoneIcon;

  let telNum = document.createElement('div');
  telNum.textContent = phone;

  telephone.appendChild(telIcon);
  telephone.appendChild(telNum);

  let addressData = document.createElement('div');
  addressData.className = 'address-details';

  let addressDataText = document.createElement('div');
  let addressDataIcon = document.createElement('div');
  addressDataText.textContent = address;
  addressDataIcon.innerHTML = mapIcon;

  addressData.appendChild(addressDataIcon);
  addressData.appendChild(addressDataText);

  aboutContainer.appendChild(map);
  aboutContainer.appendChild(addressData);
  aboutContainer.appendChild(telephone);

  content.appendChild(aboutContainer);
}
