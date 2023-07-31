import {
  getDatabase,
  ref,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

function formatarReais(numero) {
  return numero.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function renderProduct() {
  async function renderImgProduct() {
    const db = getDatabase();
    const productsRef = await ref(db, "products/");
    const productContainer = document.querySelector(".img__product__container");

    try {
      const snapshot = await get(productsRef);
      const products = snapshot.val();

      const filterProducts = products.filter(
        (product) => product.name === "Playstation 5"
      );

      filterProducts.map((product) => {
        const productImg = document.createElement("img");
        productImg.classList.add("img__product");
        productImg.src = product.imgUrl;
        productImg.alt = product.alt;

        productContainer.appendChild(productImg);
      });
    } catch (error) {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("errorDiv");

      const productError = document.createElement("p");
      productError.classList.add("mensagemDeErro");
      productError.textContent = "Ocorreu um erro, por favor tente mais tarde.";

      errorDiv.appendChild(productError);
      productContainer.appendChild(errorDiv);
      console.error(error);
    }
  }

  async function renderSimilarProduct() {
    const db = getDatabase();
    const productsRef = await ref(db, "products/");
    const productContainerSimilar = document.querySelector(
      ".product__container__similar"
    );

    try {
      const snapshot = await get(productsRef);
      const products = snapshot.val();

      const filterProducts = products.filter(
        (product) => product.section === "Star Wars"
      );

      const limitedProducts = filterProducts.slice(0, 5);

      filterProducts.map((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const productImg = document.createElement("img");
        productImg.classList.add("product__img");
        productImg.src = product.imgUrl;
        productImg.alt = product.alt;
        const productName = document.createElement("p");
        productName.classList.add("product__name");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.classList.add("product__price");
        productPrice.textContent = `${formatarReais(product.price)}`;

        const productLink = document.createElement("a");
        productLink.classList.add("link__product");
        productLink.href = "./product.html"; // Substitua "product.html" pelo link correto
        productLink.textContent = "Ver produto";

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productLink);

        productContainerSimilar.appendChild(productDiv);
      });
    } catch (error) {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("errorDiv");

      const productError = document.createElement("p");
      productError.classList.add("mensagemDeErro");
      productError.textContent = "Ocorreu um erro, por favor tente mais tarde.";

      errorDiv.appendChild(productError);
      productContainerSimilar.appendChild(errorDiv);
      console.error(error);
    }
  }

  renderImgProduct();
  renderSimilarProduct();
}

renderProduct();
