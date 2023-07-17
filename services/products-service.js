const url = "http://localhost:3000/products";

function listProducts() {
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    })
    .catch((e) => console.log(e));
}

export const productsServices = {
  listProducts,
};
