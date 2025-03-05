// Utility Functions
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
};

// Theme Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Page-specific logic
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        loadProducts();
    } else if (window.location.pathname.includes('users.html')) {
        loadUsers();
    } else if (window.location.pathname.includes('product-detail.html')) {
        loadProductDetail();
    } else if (window.location.pathname.includes('user-detail.html')) {
        loadUserDetail();
    }
});

// Products Page
async function loadProducts() {
    const grid = document.getElementById('products-grid');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const search = document.getElementById('product-search');
    const sort = document.getElementById('product-sort');
    const filter = document.getElementById('product-filter');

    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // Populate categories
        const categories = [...new Set(products.map(p => p.category))];
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            filter.appendChild(option);
        });

        const displayProducts = (filteredProducts) => {
            grid.innerHTML = '';
            filteredProducts.forEach(product => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>$${product.price}</p>
                    <p>${product.category}</p>
                    <p>Rating: ${product.rating.rate}</p>
                    <button onclick="localStorage.setItem('productId', ${product.id}); window.location.href='product-detail.html'">View Details</button>
                `;
                grid.appendChild(card);
            });
        };

        const filterAndSort = () => {
            let filtered = [...products];
            const searchValue = search.value.toLowerCase();
            const sortValue = sort.value;
            const filterValue = filter.value;

            if (searchValue) {
                filtered = filtered.filter(p => p.title.toLowerCase().includes(searchValue));
            }
            if (filterValue) {
                filtered = filtered.filter(p => p.category === filterValue);
            }
            if (sortValue === 'price-asc') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortValue === 'price-desc') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (sortValue === 'rating') {
                filtered.sort((a, b) => b.rating.rate - a.rating.rate);
            }

            displayProducts(filtered);
        };

        search.addEventListener('input', debounce(filterAndSort, 300));
        sort.addEventListener('change', filterAndSort);
        filter.addEventListener('change', filterAndSort);

        displayProducts(products);
        loading.classList.add('hidden');
    } catch (err) {
        loading.classList.add('hidden');
        error.classList.remove('hidden');
        error.textContent = 'Failed to load products. Please try again.';
    }
}

async function loadUsers() {
    const grid = document.getElementById('users-grid');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const search = document.getElementById('user-search');
    const sort = document.getElementById('user-sort');
    const filter = document.getElementById('user-filter');

    try {
        const response = await fetch('https://fakestoreapi.com/users');
        const users = await response.json();

        const cities = [...new Set(users.map(u => u.address.city))];
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            filter.appendChild(option);
        });

        const displayUsers = (filteredUsers) => {
            grid.innerHTML = '';
            filteredUsers.forEach(user => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <h3>${user.name.firstname} ${user.name.lastname}</h3>
                    <p>${user.username}</p>
                    <p>${user.email}</p>
                    <p>${user.address.city}, ${user.address.street}</p>
                    <button onclick="localStorage.setItem('userId', ${user.id}); window.location.href='user-detail.html'">View Details</button>
                `;
                grid.appendChild(card);
            });
        };

        const filterAndSort = () => {
            let filtered = [...users];
            const searchValue = search.value.toLowerCase();
            const sortValue = sort.value;
            const filterValue = filter.value;

            if (searchValue) {
                filtered = filtered.filter(u => 
                    `${u.name.firstname} ${u.name.lastname}`.toLowerCase().includes(searchValue) ||
                    u.email.toLowerCase().includes(searchValue)
                );
            }
            if (filterValue) {
                filtered = filtered.filter(u => u.address.city === filterValue);
            }
            if (sortValue === 'name-asc') {
                filtered.sort((a, b) => `${a.name.firstname} ${a.name.lastname}`.localeCompare(`${b.name.firstname} ${b.name.lastname}`));
            } else if (sortValue === 'name-desc') {
                filtered.sort((a, b) => `${b.name.firstname} ${b.name.lastname}`.localeCompare(`${a.name.firstname} ${a.name.lastname}`));
            }

            displayUsers(filtered);
        };

        search.addEventListener('input', debounce(filterAndSort, 300));
        sort.addEventListener('change', filterAndSort);
        filter.addEventListener('change', filterAndSort);

        displayUsers(users);
        loading.classList.add('hidden');
    } catch (err) {
        loading.classList.add('hidden');
        error.classList.remove('hidden');
        error.textContent = 'Failed to load users. Please try again.';
    }
}
//-----------------------------------
async function loadProductDetail() {
    const detail = document.getElementById('product-detail');
    const loading = document.getElementById('loading');
    const productId = localStorage.getItem('productId');

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();

        detail.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
        `;
        loading.classList.add('hidden');
    } catch (err) {
        loading.classList.add('hidden');
        detail.innerHTML = '<p class="error">Failed to load product details.</p>';
    }
}

// User Detail Page
async function loadUserDetail() {
    const detail = document.getElementById('user-detail');
    const loading = document.getElementById('loading');
    const userId = localStorage.getItem('userId');

    try {
        const response = await fetch(`https://fakestoreapi.com/users/${userId}`);
        const user = await response.json();

        detail.innerHTML = `
            <h2>${user.name.firstname} ${user.name.lastname}</h2>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            <p>Company: ${user.company?.name || 'N/A'}</p>
        `;
        loading.classList.add('hidden');
    } catch (err) {
        loading.classList.add('hidden');
        detail.innerHTML = '<p class="error">Failed to load user details.</p>';
    }
}