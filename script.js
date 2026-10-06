import get_data from "./get_data.js";
import timer from "./timer.js";
const wrapper = document.querySelector('#wrapper');
const btnShow = document.querySelector('#btnShow');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

btnShow.addEventListener('click', () => {
  btnShow.disabled = true;
  wrapper.innerHTML = '';
  document.querySelector('.loader ').style.display = 'block';
  create_products();
});

const create_products = async () => {

  await timer();
  const data = await get_data();
  document.querySelector('.loader ').style.display = 'none';
  data.forEach((product) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <p><strong>Prodotto: ${product.title}</strong></p>
      <p>Categoria: ${product.category}</p>
      <p>Descrizione: ${product.description}</p>
      <p>Prezzo:<strong> ${product.price}</strong></p>
      <hr>
      `;
    wrapper.appendChild(div);
  });
  btnShow.disabled = false;


}
