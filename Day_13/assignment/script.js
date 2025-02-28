// Sample product data
const products = [
    { id: 1, name: "Laptop", price: 999, description: "High-performance laptop", category: "electronics", image: "images/laptop.jpg" },
    { id: 2, name: "T-Shirt", price: 20, description: "Cotton t-shirt", category: "clothing", image: "images/tshirt.jpg" },
    { id: 3, name: "Book", price: 15, description: "Bestseller novel", category: "books", image: "images/book.jpg" },
    { id: 4, name: "Headphones", price: 100, description: "Noise-cancelling headphones", category: "electronics", image: "images/headphones.jpg" },
    { id: 5, name: "Sneakers", price: 120, description: "Running shoes", category: "clothing", image: "images/sneakers.jpg" },
    { id: 6, name: "Watch", price: 250, description: "Smartwatch", category: "accessories", image: "images/watch.jpg" },
    { id: 7, name: "Backpack", price: 50, description: "Waterproof backpack", category: "accessories", image: "images/backpack.jpg" },
    { id: 8, name: "Camera", price: 600, description: "DSLR camera", category: "electronics", image: "images/camera.jpg" },
    { id: 9, name: "Jeans", price: 40, description: "Denim jeans", category: "clothing", image: "images/jeans.jpg" },
    { id: 10, name: "Notebook", price: 10, description: "Hardcover notebook", category: "books", image: "images/notebook.jpg" },
];

// Render products on the index page
if (window.location.pathname.endsWith("index.html")) {
    const productList = document.getElementById("product-list");

    function renderProducts(products) {
        productList.innerHTML = "";
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });
    }

    // Add to cart functionality
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
    }

    // Sorting and filtering
    const sortDropdown = document.getElementById("sort");
    const filterDropdown = document.getElementById("filter");

    if (sortDropdown && filterDropdown) {
        sortDropdown.addEventListener("change", (e) => {
            const sortedProducts = [...products].sort((a, b) => {
                if (e.target.value === "low-to-high") return a.price - b.price;
                else return b.price - a.price;
            });
            renderProducts(sortedProducts);
        });

        filterDropdown.addEventListener("change", (e) => {
            const filteredProducts = products.filter(product => {
                if (e.target.value === "all") return true;
                return product.category === e.target.value;
            });
            renderProducts(filteredProducts);
        });
    }

    // Initial render
    renderProducts(products);
}

// Render cart items on the cart page
if (window.location.pathname.endsWith("cart.html")) {
    function renderCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartTable = document.getElementById("cart-table").getElementsByTagName("tbody")[0];
        cartTable.innerHTML = "";

        if (cart.length === 0) {
            cartTable.innerHTML = "<tr><td colspan='6'>Your cart is empty! Add some products!</td></tr>";
            return;
        }

        cart.forEach((product, index) => {
            const row = cartTable.insertRow();
            row.innerHTML = `
                <td>${product.name}</td>
                <td>$${product.price}</td>
                <td>${product.category}</td>
                <td><img src="${product.image}" alt="${product.name}" width="50"></td>
                <td>
                    <button onclick="updateQuantity(${index}, -1)">-</button>
                    <span>1</span>
                    <button onclick="updateQuantity(${index}, 1)">+</button>
                </td>
                <td><button onclick="removeFromCart(${index})">Remove</button></td>
            `;
        });
    }

    // Update quantity in cart
    function updateQuantity(index, change) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        // Update quantity logic here (you may need to add a quantity property to the product object)
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Remove item from cart
    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }

    // Purchase functionality
    function purchase() {
        localStorage.removeItem("cart");
        alert("Thank you for your purchase!");
        renderCart();
    }

    // Initial render
    renderCart();
}