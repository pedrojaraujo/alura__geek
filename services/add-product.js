import {
  getDatabase,
  ref,
  set,
  child,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

function new_product(id, name, description, price, imgUrl, section, alt) {
  const products = [
    {
      id,
      name,
      description,
      price,
      imgUrl,
      section,
      alt,
    },
  ];

  const db = getDatabase();
  const productsRef = ref(db, "products");

  products.forEach((product) => {
    const productId = product.id.toString(); // Converte

    set(child(productsRef, productId), product)
      .then(() => {
        console.log("Produto adicionado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao adicionar produto:", error);
      });
  });
}
