const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;


// addProductButton.addEventListener('click', function() {
// // get the text from the input
// const inputText = productNameInput.value
// }

addProductButton.addEventListener('click', addList);

function addList() {
    const taskName = productNameInput.value;
    const category = productPriceInput.value;
    // const deadline = deadlineInput.value;
    // const status = statusInput.value;

    if (!taskName || !category) {
        alert('Please fill in all fields.');
        return;
    }
// console.log(inputText)
console.log(productNameInput, productPriceInput);

const newTask = {
        taskName,
        category,
}

// Check that the input is not empty

// create the new li
const newLi = document.createElement('li')
newLi.textContent = cart
newLi.classList.add('item')

// create the remove button
const removeBtn =  document.createElement('button') // creates the button
removeBtn.textContent = 'Remove' // this set the text of the button
removeBtn.classList.add('remove') // adds a class name to the button

newLi.appendChild(removeBtn)
cart.appendChild(newLi)

//update the todos count
// countTodos()
}


cart.addEventListener('click', function(event) {
    console.dir(event)

    // if the user clicks on the remove button
    if (event.target.classList.contains('remove')) {
        event.target.closest('li').remove()
        //update the todos count
        // countTodos()
    }

    // this is use when the user click on items created in the li to manupulate what the item does
    if (event.target.classList.contains('item')) {
        event.target.classList.toggle('completed')
    }
})

// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}