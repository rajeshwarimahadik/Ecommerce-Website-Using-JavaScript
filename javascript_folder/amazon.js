let maleOutput = document.querySelector("#maleproduct");
let femaleOutput = document.querySelector("#femaleproduct");
let electronicsOutput = document.querySelector("#electronicsproduct");
let jewelleryOutput = document.querySelector("#jewelleryproduct");

let oneUser = JSON.parse(localStorage.getItem("oneUser"));
let dataFromStorage = JSON.parse(localStorage.getItem("data"));
let userUpdate = document.querySelector("#userUpdate");

let cartItems = [];

if (oneUser) {
  userUpdate.innerHTML = `<span style="font-size: 16px; color: white;text-decoration: none;">
                            ${oneUser.sfirstName}
                          </span>
                          <a href="./amazon.html" id="logout">
                            <button>Logout</button>
                          </a>`;
  
  let logout = document.querySelector("#logout");
  logout.addEventListener("click", () => {
    localStorage.removeItem("oneUser");
  });

  if (oneUser.cartItems) {
    cartItems = oneUser.cartItems;
  }
}

async function main() {
  let dataFromServer = await fetch("https://fakestoreapi.com/products");
  let allData = await dataFromServer.json();

  // Filter data based on categories
  let maleData = allData.filter((e) => e.category.toLowerCase() === "men's clothing");
  let femaleData = allData.filter((e) => e.category.toLowerCase() === "women's clothing");
  let jewelleryData = allData.filter((e) => e.category.toLowerCase() === "jewelery");
  let electronicsData = allData.filter((e) => e.category.toLowerCase() === "electronics");

  // Display male products
  maleData.map((e) => {
    maleOutput.innerHTML += `
      <div id="${e.id}">
        <img src="${e.image}" alt="">
        <h3>${e.title}</h3>
        <h2>$${e.price}</h2>
        <h2>Rating: ${e.rating.rate}</h2>
        <button class="btn">Add to cart</button>
      </div>`;
  });

  // Display female products
  femaleData.map((e) => {
    femaleOutput.innerHTML += `
      <div id="${e.id}">
        <img src="${e.image}" alt="">
        <h3>${e.title}</h3>
        <h2>$${e.price}</h2>
        <h2>Rating: ${e.rating.rate}</h2>
        <button class="btn">Add to cart</button>
      </div>`;
  });

  // Display electronics products
  electronicsData.map((e) => {
    electronicsOutput.innerHTML += `
      <div id="${e.id}">
        <img src="${e.image}" alt="">
        <h3>${e.title}</h3>
        <h2>$${e.price}</h2>
        <h2>Rating: ${e.rating.rate}</h2>
        <button class="btn">Add to cart</button>
      </div>`;
  });

  // Display jewellery products
  jewelleryData.map((e) => {
    jewelleryOutput.innerHTML += `
      <div id="${e.id}">
        <img src="${e.image}" alt="">
        <h3>${e.title}</h3>
        <h2>$${e.price}</h2>
        <h2>Rating: ${e.rating.rate}</h2>
        <button class="btn">Add to cart</button>
      </div>`;
  });

  // Add to Cart functionality
  let btn = document.querySelectorAll(".btn");
  btn.forEach((button) => {
    button.addEventListener("click", () => {
      let parent = button.parentElement; // Get the parent div of the button
      let productId = parent.getAttribute("id"); // Get the product id from the parent div

      // Find the product based on the id
      let oneProduct = allData.find((prod) => prod.id == productId);

      if (oneProduct) {
        // Check if the product is already in the cart to avoid duplicates
        if (!cartItems.some((cartProd) => cartProd.id === oneProduct.id)) {
          cartItems.push(oneProduct);
        }

        // Update localStorage with the new cart
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        oneUser.cartItems = cartItems;
        localStorage.setItem("oneUser", JSON.stringify(oneUser));

        // Update the dataFromStorage with the updated user cart
        let updatedUser = dataFromStorage.find(user => user.smobile == oneUser.smobile);
        if (updatedUser) {
          updatedUser.cartItems = oneUser.cartItems;
        }
        localStorage.setItem("data", JSON.stringify(dataFromStorage));

        console.log("Product added to cart:", oneProduct);
      }
    });
  });
}

main();
