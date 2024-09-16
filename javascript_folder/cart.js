let main = document.querySelector("main");
let oneUser = JSON.parse(localStorage.getItem("oneUser"));
let cartItems = oneUser ? oneUser.cartItems : [];
console.log(oneUser, main, cartItems);

if (oneUser) {
  main.innerHTML = `
    <div id="output">
      <h2>Hello, ${oneUser.sfirstName}, here is the list of items in your cart:</h2>
      <div id="list"></div>
      <h2>Total Amount: $<span id="gt"></span></h2>
      <button>Make Payment</button>
    </div>`;

  let output = document.querySelector("#list");

  if (cartItems && cartItems.length > 0) {
    let sum = 0;
    cartItems.map((e) => {
      sum += e.price;
      output.innerHTML += `
        <div id="cont">
          <img src="${e.image}" alt="">
          <h3>${e.title}</h3>
          <h4>$${e.price}</h4>
          <h4>Rating: ${e.rating.rate}</h4>
        </div>`;
    });

    // Display the total amount
    let gt = document.querySelector("#gt");
    gt.innerHTML = sum.toFixed(2); // Fix it to 2 decimal places for consistency
  } else {
    output.innerHTML = "<p>Your cart is empty.</p>";
  }
}
