let page = 1;
let loading = false;

async function fetchProducts() {
    if (loading) return;
    loading = true;
    document.getElementById('loading').classList.remove('hidden');

    const response = await fetch(`http://localhost:5000/products?page=${page}&limit=10`);
    const products = await response.json();

    const productList = document.getElementById('productList');
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'border rounded-lg p-4 shadow-md';
        div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
      <h3 class="text-lg font-semibold">${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart('${product._id}')" class="bg-blue-500 text-white px-4 py-2 rounded mt-2">Add to Cart</button>
    `;
        productList.appendChild(div);
    });

    loading = false;
    document.getElementById('loading').classList.add('hidden');
    page++;
}

function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        fetchProducts();
    }
}

async function addToCart(productId) {
    const token = localStorage.getItem('token');
    if (!token) {
        Toastify({ text: 'Please log in first', background: 'red' , duration: 3000,}).showToast();
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/cart/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({ productId, quantity: 1 }),
        });
        if (!response.ok) throw new Error('Failed to add to cart');
        Toastify({
            text: "The product is added to cart",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "green",
            },
        }).showToast();
    } catch (err) {
        Toastify({ text: 'Error adding to cart', background: 'red' }).showToast();
    }
}

window.addEventListener('scroll', handleScroll);
fetchProducts();