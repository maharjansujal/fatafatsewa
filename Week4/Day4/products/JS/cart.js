fetch("../products.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    productArray = data.products;
    localStorage.setItem("products", JSON.stringify(productArray));
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", "[]");
    }
  });

let productArray = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let add_to_cart_button = document.getElementById("add-to-cart");
let removeFromCartButton = document.getElementById("remove-from-cart");

let quantity = [{ id: 0, cart_quantity: 0 }];
// quantity[0].id=100;
// console.log(quantity[0].id);

let addToCart = (productId) => {
  let product = productArray[productId - 1];
  //   console.log(product.id);
  cart.push(product);
  
  localStorage.setItem("cart", JSON.stringify(cart));
};

let productMap = new Map();
  cart.forEach((item) => {
    if (productMap.has(item.id)) {
      let existingItem = productMap.get(item.id);
      existingItem.quantity += 1;
    } else {
      // Clone the item and add quantity
      let newItem = { ...item, quantity: 1 };
      productMap.set(item.id, newItem);
    }
  });
  let product_cart = Array.from(productMap.values());
//   console.log(product_cart);
  localStorage.setItem("productCart", JSON.stringify(product_cart));

let removeFromCart = (productId) => {
  let productIndex = cart.findIndex((product) => product.id == productId);

  if (productIndex === -1) {
    removeFromCartButton.style.display = "none";
  } else {
    cart.splice(productIndex, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    if (cart.length === 0) {
      removeFromCartButton.style.display = "none";
    }
  }
};

let checkEmptyCart = () => {
  if (cart.length == 0) {
    removeFromCartButton.style.display = "none";
  } else {
    removeFromCartButton.style.display = "block";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let productId = new URLSearchParams(window.location.search).get("id");
  if (!productId) {
    document.getElementById("container").innerText = "Product ID is missing";
  }
  checkEmptyCart();
  add_to_cart_button.addEventListener("click", () => {
    addToCart(productId);
    checkEmptyCart();
  });
  removeFromCartButton.addEventListener("click", () => {
    removeFromCart(productId);
  });
});
