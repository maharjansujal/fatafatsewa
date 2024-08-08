// fetch("../test.json")
// .then(response=>{
//     return response.json();
// })
// .then(data=>{
//     localStorage.setItem("products", JSON.stringify(data));
//     if (!localStorage.getItem("cart")){
//         localStorage.setItem("cart","[]");
//     }
// });

// let products = JSON.parse(localStorage.getItem("products"));
// let cart = JSON.parse(localStorage.getItem("cart"))||[];

// let addToCart=(productId)=>{
//     let product = products.find(product=>{
//         return product.id ==productId;
//     });
//     if(cart.length==0){
//         cart.push(product);
//     }else{
//         let res = cart.find(element=>element.id==productId);
//         if (res==undefined){
//             cart.push(product);
//         }
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

let cart = [
    {"id": 1, "price": 2000},
    {"id": 1, "price": 2000},
    {"id": 2, "price": 3000},
    {"id": 2, "price": 3000},
    {"id": 2, "price": 3000}
  ];
  
  // Create a map to store the aggregated data
  let productMap = new Map();
  
  // Aggregate items by id and count quantities
  cart.forEach(item => {
    if (productMap.has(item.id)) {
      let existingItem = productMap.get(item.id);
      existingItem.quantity += 1;
    } else {
      // Clone the item and add quantity
      let newItem = {...item, quantity: 1};
      productMap.set(item.id, newItem);
    }
  });
  
  // Convert the map to an array
  let product_cart = Array.from(productMap.values());
  
  console.log(product_cart);
  