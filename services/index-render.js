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

function renderIndex() {
  async function renderStarwarProduct() {
    const db = getDatabase();
    const productsRef = await ref(db, "products/");
    const productContainerStar = document.querySelector(
      ".product__container__starwars"
    );
    const productContainer = document.querySelector(".product__container");

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
        productLink.href = "./pages/home.html";
        productLink.textContent = "Ver produto";

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productLink);

        productContainerStar.appendChild(productDiv);
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

  async function renderConsolesProduct() {
    const db = getDatabase();
    const productsRef = await ref(db, "products/");
    const productContainerConsoles = document.querySelector(
      ".product__container__consoles"
    );

    try {
      const snapshot = await get(productsRef);
      const products = snapshot.val();

      const filterProducts = products.filter(
        (product) => product.section === "Consoles"
      );

      const limitedProducts = filterProducts.slice(0, 5);

      limitedProducts.map((product) => {
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
        productLink.href = "./pages/home.html";
        productLink.textContent = "Ver produto";

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productLink);

        productContainerConsoles.appendChild(productDiv);
      });
    } catch (error) {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("errorDiv");

      const productError = document.createElement("p");
      productError.classList.add("mensagemDeErro");
      productError.textContent = "Ocorreu um erro, por favor tente mais tarde.";

      errorDiv.appendChild(productError);
      productContainerConsoles.appendChild(errorDiv);
      console.error(error);
    }
  }

  async function renderGadgetProduct() {
    const db = getDatabase();
    const productsRef = await ref(db, "products/");
    const productContainerGadget = document.querySelector(
      ".product__container__gadget"
    );

    try {
      const snapshot = await get(productsRef);
      const products = snapshot.val();

      const filterProducts = products.filter(
        (product) => product.section === "Gadget"
      );

      const limitedProducts = filterProducts.slice(0, 5);

      limitedProducts.map((product) => {
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
        productLink.href = "./pages/home.html";
        productLink.textContent = "Ver produto";

        productDiv.appendChild(productImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productLink);

        productContainerGadget.appendChild(productDiv);
      });
    } catch (error) {
      const errorDiv = document.createElement("div");
      errorDiv.classList.add("errorDiv");

      const productError = document.createElement("p");
      productError.classList.add("mensagemDeErro");
      productError.textContent = "Ocorreu um erro, por favor tente mais tarde.";

      errorDiv.appendChild(productError);
      productContainerGadget.appendChild(errorDiv);
      console.error(error);
    }
  }
  renderStarwarProduct();
  renderConsolesProduct();
  renderGadgetProduct();
}

renderIndex();
