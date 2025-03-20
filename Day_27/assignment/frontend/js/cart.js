async function loadCart() {
    const token = localStorage.getItem('token');
    if (!token) {
        Toastify({ text: 'Please log in first', background: 'red' }).showToast();
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/cart', {
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to fetch cart');
        const cart = await response.json();

        const cartItems = document.getElementById('cartItems');
        cartItems.innerHTML = ''; // Clear existing items
        let total = 0;
        cart.forEach(item => {
            total += item.product.price * item.quantity;
            const div = document.createElement('div');
            div.className = 'border p-4 rounded-lg shadow-md flex justify-between';
            div.innerHTML = `
          <div>
            <h3 class="text-lg font-semibold">${item.product.name}</h3>
            <p>₹${item.product.price} x ${item.quantity}</p> <!-- Changed $ to ₹ -->
          </div>
          <button onclick="removeFromCart('${item.product._id}')" class="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
        `;
            cartItems.appendChild(div);
        });
        document.getElementById('total').textContent = `Total: ₹${total}`; // Changed $ to ₹
    } catch (err) {
        Toastify({ text: 'Error loading cart', background: 'red' }).showToast();
    }
}

async function removeFromCart(productId) {
    const token = localStorage.getItem('token');
    if (!token) {
        Toastify({ text: 'Please log in first', background: 'red' }).showToast();
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/cart/remove/${productId}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Failed to remove item');
        Toastify({ text: 'Removed from cart', background: 'green' }).showToast();
        loadCart(); // Refresh cart
    } catch (err) {
        Toastify({ text: 'Error removing item', background: 'red' }).showToast();
    }
}

document.getElementById('checkoutBtn').addEventListener('click', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        Toastify({ text: 'Please log in first', background: 'red' }).showToast();
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/checkout', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${token}` },
        });
        if (!response.ok) throw new Error('Checkout failed');
        Toastify({ text: 'Checkout successful (mock)', background: 'green' }).showToast();
        loadCart();
    } catch (err) {
        Toastify({ text: 'Error during checkout', background: 'red' }).showToast();
    }
});

loadCart();