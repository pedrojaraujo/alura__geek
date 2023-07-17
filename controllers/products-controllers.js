import { productsServices } from "../services/products-service.js";

const newProduct = (id, name, price, imgUrl) => {
  const card = document.createElement("div");
  const content = `
    <div class="product__container">
      <img class="product__img" src="${imgUrl}" alt="#produto1">
      <p class="product__name">${name}</p>
      <p class="product__price">${price}</p>
      <a class="link__product" href="#">Ver produto</a>
    </div>
  `;
  card.innerHTML = content;

  return card;
};

const products = document.querySelector("[data-product]");

listProducts()
