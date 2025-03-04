// Sample product data

const products = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "category": "Electronics",
      "price": 49.99,
      "rating": 4.5,
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQI2yaBrsOhg60x5FPzVUiINeZVKQdCQn58PkSVcFW-htMNxKHmDlWa2sHDc814ubs5q8zKmxyxZDaJv9EfY2zUeIZTfe2NLXxmpz3xKDLa3oUoybYwyZbD"
    },
    {
      "id": 2,
      "name": "Gaming Mouse",
      "category": "Electronics",
      "price": 29.99,
      "rating": 4.2,
      "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTdeYUxNZtGDEGOk6UWww1m60ZKYwb9UcLbe-6Wc4sq6a5rMK5es6xPtksq6Eb2KrsxFJk9vI-2BQyW4QPOyGXaG6bZ-wXZjfqKhiMJVRGCmOKoXzzwQHslBQ"
    },
    {
      "id": 3,
      "name": "Mechanical Keyboard",
      "category": "Electronics",
      "price": 79.99,
      "rating": 4.7,
      "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQd3CcNlyz7VcYXI76DnDqd8VFFZVosP2X-R_bT67iN2OrtS5uQPjju96dTtF_FOhaotYqYSkoCOgS5SqTLrd0CISCtvyMZ2dViDe6cAY7ESGZbpW70As2WKDE"
    },
    {
      "id": 4,
      "name": "Smartwatch",
      "category": "Wearable",
      "price": 199.99,
      "rating": 4.8,
      "image": "https://m.media-amazon.com/images/I/71JU-bUt-sL.jpg"
    },
    {
      "id": 5,
      "name": "Running Shoes",
      "category": "Fashion",
      "price": 59.99,
      "rating": 4.3,
      "image": "https://assets.adidas.com/images/w_600,f_auto,q_auto/8db7a22fd8a14673a4d95c38624139ca_9366/Galaxy_7_Running_Shoes_Black_ID8765_HM1.jpg"
    },
    {
      "id": 6,
      "name": "Leather Wallet",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.0,
      "image": "https://m.media-amazon.com/images/I/81WIcyHQ7oL.AC_UY1100.jpg"
    },
    {
      "id": 7,
      "name": "Digital Camera",
      "category": "Electronics",
      "price": 349.99,
      "rating": 4.6,
      "image": "https://cdn.cinemacenter.in/image/cache/catalog/images/0021038_sony-zv-1-digital-camera_500-500x500.jpeg.webp"
    },
    {
      "id": 8,
      "name": "Backpack",
      "category": "Accessories",
      "price": 39.99,
      "rating": 4.4,
      "image": "https://m.media-amazon.com/images/I/71qpXciYP1L.jpg"
    },
    {
      "id": 9,
      "name": "Sunglasses",
      "category": "Fashion",
      "price": 24.99,
      "rating": 4.1,
      "image": "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/M/8/M8022BR1V_1_lar.jpg"
    },
    {
      "id": 10,
      "name": "Water Bottle",
      "category": "Home & Kitchen",
      "price": 14.99,
      "rating": 4.2,
      "image": "https://rukminim2.flixcart.com/image/850/1000/l4bn5ow0/bottle/6/c/9/1000-bpa-free-drinking-water-bottle-with-time-marker-straw-for-original-imagf8npfztmb3qg.jpeg?q=20&crop=false"
    },
    {
      "id": 11,
      "name": "Bluetooth Speaker",
      "category": "Electronics",
      "price": 59.99,
      "rating": 4.5,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuAvU3-uz13LNVhjc6HCKGVREFiseFmVfRHA&s"
    },
    {
      "id": 12,
      "name": "Electric Kettle",
      "category": "Home & Kitchen",
      "price": 34.99,
      "rating": 4.6,
      "image": "https://m.media-amazon.com/images/I/51Q11RNy8dL.AC_UF894,1000_QL80.jpg"
    },
    {
      "id": 13,
      "name": "Portable Power Bank",
      "category": "Electronics",
      "price": 39.99,
      "rating": 4.3,
      "image": "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaW4vNjVmOTA4NDkyMzFlMDEyMGMzMjViN2UzLXBvcnRhYmxlLWNoYXJnZXItcG93ZXItYmFuay0yNTgwMG1haC5qcGc.jpg"
    },
    {
      "id": 14,
      "name": "Smart LED Bulb",
      "category": "Home & Kitchen",
      "price": 19.99,
      "rating": 4.7,
      "image": "https://m.media-amazon.com/images/I/51yBOvORkPL.jpg"
    },
    {
      "id": 15,
      "name": "Noise Cancelling Earbuds",
      "category": "Electronics",
      "price": 89.99,
      "rating": 4.8,
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QL_OWaxEwuyQMUrYgVwoV9eTsv_hlzcWrg&s"
    },
    {
      "id": 16,
      "name": "Travel Pillow",
      "category": "Accessories",
      "price": 22.99,
      "rating": 4.2,
      "image": "https://rukminim2.flixcart.com/image/850/1000/kgjqefk0/neck-pillow-eye-shade/z/b/b/travel-neck-pillow-unisex-u-shaped-micro-fibre-soft-cushions-original-imafwr8agyk7dt8c.jpeg?q=90&crop=false"
    },
    {
      "id": 17,
      "name": "Yoga Mat",
      "category": "Fitness",
      "price": 29.99,
      "rating": 4.5,
      "image": "https://www.niviasports.com/cdn/shop/files/1_f74628ac-df66-4c71-b112-fd8253ce175a.jpg?v=1716799881"
    },
    {
      "id": 18,
      "name": "Men's Wrist Watch",
      "category": "Fashion",
      "price": 129.99,
      "rating": 4.6,
      "image": "https://lorenzindia.com/cdn/shop/files/MK-1065A_1-PhotoRoom.png?v=1695797189"
    },
    {
      "id": 19,
      "name": "Wireless Charger",
      "category": "Electronics",
      "price": 27.99,
      "rating": 4.3,
      "image": "https://m.media-amazon.com/images/I/61oIAKY9s1L.jpg"
    },
    {
      "id": 20,
      "name": "Graphic T-Shirt",
      "category": "Fashion",
      "price": 19.99,
      "rating": 4.1,
      "image": "https://www.hijibizi.in/cdn/shop/products/WhatsAppImage2022-11-02at22.20.19_1.jpg?v=1667718907&width=1445"
    }
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
            <p>₹${product.price.toFixed(2)}</p>
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
        totalPriceElement.innerText = `Total: ₹${totalPrice.toFixed(2)}`;
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

// Filter products
function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const price = document.getElementById('priceFilter').value;
    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (price === 'below50') {
        filteredProducts = filteredProducts.filter(product => product.price < 50);
    } else if (price === '50-100') {
        filteredProducts = filteredProducts.filter(product => product.price >= 50 && product.price <= 100);
    } else if (price === 'above100') {
        filteredProducts = filteredProducts.filter(product => product.price > 100);
    }

    displayProducts(filteredProducts);
}

// Sort products
function sortProducts() {
    const sortBy = document.getElementById('sortBy').value;
    let sortedProducts = [...products];

    if (sortBy === 'priceLowToHigh') {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighToLow') {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    }

    displayProducts(sortedProducts);
}

// Display products only on the index page
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    displayProducts(products);
}

// Display cart items only on the cart page
if (window.location.pathname.endsWith('cart.html')) {
    displayCartItems();
}

// Display order summary only on the checkout page
if (window.location.pathname.endsWith('checkout.html')) {
    displayOrderSummary();
}