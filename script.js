const productNameInput = document.getElementById("product-name");
const productPriceInput = document.getElementById("product-price");
const addProductButton = document.getElementById("add-product");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("total-price");

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

// Function to remove an item
function removeItem(event) {
  const item = event.target.closest("li");
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

addProductButton.addEventListener("click", function () {
  const inputText = productNameInput.value;
  const inputPrice = Number(productPriceInput.value);

  if (!inputText || isNaN(inputPrice)) {
    alert("Please enter a product name.");
    return;
  }

    if (!productPriceInput.value || isNaN(inputPrice) || inputPrice <= 0) {
    alert("Please enter a valid product price greater than 0.");
    return;
  }

  let li = document.createElement("li");
  li.textContent = `${inputText} - $${inputPrice.toFixed(2)}`;
  li.dataset.price = inputPrice;

  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  removeButton.classList.add("remove");
  li.appendChild(removeButton);

  cart.appendChild(li);

  updateTotalPrice(inputPrice);
});

cart.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove")) {
    removeItem(event);
  }
});
