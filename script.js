// Elements from the DOM
const cartCount = document.getElementById("cart-count");
const addToCartBtn = document.querySelector(".addBtn");
const checkoutBtn = document.getElementById("checkout-btn");
const cartBox = document.getElementById("cart-box");
const closeCartBtn = document.getElementById("close-cart");
const cartDetails = document.getElementById("cart-details");
const quantityDisplay = document.querySelector(".p_count span");
const productImage = document.getElementById("product-image");
const colorBtns = document.querySelectorAll(".color_gap button");
const sizeBtns = document.querySelectorAll(".size button");

// Cart Array to store products
let cartItems = [];

// Product data
let product = {
  title: "Classy Modern Smart watch",
  description:
    "I must explain to you how all this mistaken idea of denoun cing ple praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
  type: "Model Number",
  watchName: "Forerunner 290XT",
  priceBySize: {
    S: 69,
    M: 79,
    L: 89,
    XL: 99,
  },
  selectedColor: "red",
  selectedSize: "S",
  quantity: 0,
  image: "./images/product-red.png",
};

// Update product details dynamically
document.getElementById("product-title").innerText = product.title;
document.getElementById(
  "product-price"
).innerText = `$${product.priceBySize.S.toFixed(2)}`;
document.getElementById("product-descreption").innerText = product.description;
document.getElementById("type-name").innerText = product.type;
document.getElementById("watch-name").innerText = product.watchName;

// Update wrist size price
function updateSizePrice(size) {
  document.getElementById("w-price1").innerText =
    size === "S" ? `$${product.priceBySize.S.toFixed(2)}` : "";
  document.getElementById("w-price2").innerText =
    size === "M" ? `$${product.priceBySize.M.toFixed(2)}` : "";
  document.getElementById("w-price3").innerText =
    size === "L" ? `$${product.priceBySize.L.toFixed(2)}` : "";
  document.getElementById("w-price4").innerText =
    size === "XL" ? `$${product.priceBySize.XL.toFixed(2)}` : "";
}

// Handle color selection
colorBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedColor = button.getAttribute("data-color");
    product.selectedColor = selectedColor;
    productImage.src = `./images/product-${selectedColor}.png`; // Change the image based on color
  });
});

// Handle size selection
sizeBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedSize = button.getAttribute("data-size");
    product.selectedSize = selectedSize;
    updateSizePrice(selectedSize);
  });
});

// Update quantity
document
  .querySelector(".addItem button[aria-label='Decrease Quantity']")
  .addEventListener("click", () => {
    if (product.quantity > 0) {
      product.quantity--;
      quantityDisplay.innerText = product.quantity;
    }
  });

document
  .querySelector(".addItem button[aria-label='Increase Quantity']")
  .addEventListener("click", () => {
    product.quantity++;
    quantityDisplay.innerText = product.quantity;
  });

// Add to Cart
addToCartBtn.addEventListener("click", () => {
  if (product.quantity > 0 && product.selectedSize && product.selectedColor) {
    // Create a new cart item
    const newItem = {
      title: product.title,
      quantity: product.quantity,
      price: product.priceBySize[product.selectedSize],
      size: product.selectedSize,
      color: product.selectedColor,
      image: `./images/product-${product.selectedColor}.png`,
    };

    // Add the item to the cart
    cartItems.push(newItem);

    updateCartDisplay();
    cartCount.innerText = cartItems.length;
    cartBox.style.display = "block";
  } else {
    alert("Please select a size, color, and quantity.");
  }
});

// Update Cart Display
function updateCartDisplay() {
  const cartItemsList = document.getElementById("cart-items-list");
  cartItemsList.innerHTML = "";

  let totalPrice = 0;

  // Add each item to the cart list
  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <div class="cart-item-flex">
      <img src="${item.image}" alt="${item.title}" class="cart-item-image" />
      <div class="cart-item-details">
        <h4>${item.title} (${item.size} - ${item.color})</h4>
        <p>Price: $${item.price.toFixed(2)}</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: $${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      </div>
    `;
    cartItemsList.appendChild(cartItem);
    totalPrice += item.price * item.quantity;
  });

  document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}

checkoutBtn.addEventListener("click", () => {
  cartBox.style.display = "block";
});

closeCartBtn.addEventListener("click", () => {
  cartBox.style.display = "none";
});
