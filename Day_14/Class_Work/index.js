// Sample product data
const products = [
    // (Use the product data provided in your question)
];

// Display products on the index page
function displayProducts(products) {
    const productList = document.getElementById('productList');
    if (!productList) return; // Exit if the element doesn't exist
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating} ⭐</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

// Display cart items on the cart page
function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return; // Exit if the element doesn't exist
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="80">
                <h3>${item.name}</h3>
                <p>$${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItems.appendChild(cartItemElement);
        });
    }
    calculateTotalPrice();
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

// Calculate total price
function calculateTotalPrice() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.innerText = `Total: $${totalPrice.toFixed(2)}`;
    }
}

// Place order function
function placeOrder() {
    localStorage.removeItem('cart');
    alert('Order placed successfully!');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 3000);
}

// Display order summary on the checkout page
function displayOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    if (!orderSummary) return; // Exit if the element doesn't exist
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    orderSummary.innerHTML = '';

    cart.forEach(item => {
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Quantity: ${item.quantity}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;
        orderSummary.appendChild(orderItem);
    });

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    orderSummary.innerHTML += `<p><strong>Total: $${totalPrice.toFixed(2)}</strong></p>`;
}

// Event listeners for filters and sorting
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const sortBy = document.getElementById('sortBy');

if (categoryFilter) {
    categoryFilter.addEventListener('change', filterProducts);
}
if (priceFilter) {
    priceFilter.addEventListener('change', filterProducts);
}
if (sortBy) {
    sortBy.addEventListener('change', sortProducts);
}

