document.addEventListener("DOMContentLoaded", () => {
  const productCategory = {
    title: "Classy Modern Smart Watch",
    price: "$99.99",
    descreption:
      "I must explain to you how all this mistaken idea of denouncing praising pain was born and I will give you a complete account of the system, and expound the actual teaching.",
    type: "Model Number",
    watch: "Forerunner 290XT",
  };

  const productPrices = {
    s_price: "$69",
    m_price: "$79",
    l_price: "$89",
    xl_price: "$99",
  };

  // Update product details
  document.getElementById("product-title").textContent = productCategory.title;
  document.getElementById("product-price").textContent = productCategory.price;
  document.getElementById("product-descreption").textContent =
    productCategory.descreption;
  document.getElementById("type-name").textContent = productCategory.type;
  document.getElementById("watch-name").textContent = productCategory.watch;

  // Update product prices
  document.getElementById("w-price1").textContent = productPrices.s_price;
  document.getElementById("w-price2").textContent = productPrices.m_price;
  document.getElementById("w-price3").textContent = productPrices.l_price;
  document.getElementById("w-price4").textContent = productPrices.xl_price;

  // Cart logic for increasing and decreasing quantity
  let cartCount = 0;

  document
    .querySelector(".addItem button:nth-child(1)")
    .addEventListener("click", () => {
      if (cartCount > 0) cartCount--;
      document.querySelector(".addItem p span").textContent = cartCount;
      document.getElementById("cart-count").textContent = cartCount;
    });

  document
    .querySelector(".addItem button:nth-child(3)")
    .addEventListener("click", () => {
      cartCount++;
      document.querySelector(".addItem p span").textContent = cartCount;
      document.getElementById("cart-count").textContent = cartCount;
    });

  // Cart button for show add item

  document.getElementById("checkout-btn").addEventListener("click", () => {
    document.getElementById("cart-box").style.display = "block";
  });
  document.getElementById("close-cart").addEventListener("click", () => {
    document.getElementById("cart-box").style.display = "none";
  });
});
