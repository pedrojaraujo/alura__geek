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

async function renderProduct() {
  const db = getDatabase();
  const productsRef = await ref(db, "products/");
  const productContainer = document.querySelector(".product__container");

  try {
    const snapshot = await get(productsRef);
    const products = snapshot.val();

    products.map((product) => {
      //Div do produc
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      //img
      const productImg = document.createElement("img");
      productImg.classList.add("product__img");
      productImg.src = product.imgUrl;
      productImg.alt = product.alt;

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("btn__deletar");
      const deleteImg = document.createElement("img");
      deleteImg.src = "../public/imgs/Delete.png";
      deleteImg.alt = "delete-btn";
      deleteButton.appendChild(deleteImg);

      const editButton = document.createElement("button");
      editButton.classList.add("btn__editar");
      const editImg = document.createElement("img");
      editImg.src = "../public/imgs/Edit.png";
      editImg.alt = "edit-btn";
      editButton.appendChild(editImg);

      // Criar o nome e preço do produto
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
      productDiv.appendChild(deleteButton);
      productDiv.appendChild(editButton);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(productLink);

      productContainer.appendChild(productDiv);
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

renderProduct();
