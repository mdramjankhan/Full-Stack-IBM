document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
        alert("Access Denied! Please Register or Login!");
        return window.location.href = 'login.html';
    }
});
let currentPage = 1;

async function fetchProducts(currentPage) {
    try {
        const res = await fetch(`http://localhost:5000/v1/api/dashboard/?page=${currentPage}`, {
            method: 'GET',
            // headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
        });
        return await res.json();
    } catch(e) {
        console.error(e);
    }
    
}
const loadMoreBTN = document.getElementById("load-more");


loadMoreBTN.addEventListener('click', async () => {
    let dataContainer = document.getElementById('show-data');
    // dataContainer.className = 'container';

    // const token = localStorage.getItem('token');
    try {

        // const res = await fetch(`http://localhost:5000/v1/api/dashboard/?page=${currentPage}`, {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
        // });
        // const res = fetchProducts();
        // const data = await res.json();
        const data = await fetchProducts();
        console.log(data);
        console.log(data.products);
        data.products.map((el, index) => {
            let image = document.createElement('img');
            let name = document.createElement('h2');
            let price = document.createElement('p');
            let desc = document.createElement('p');
            let category = document.createElement("p");

            name.textContent = `Name: ${el.name}`;
            price.textContent = `Price: ${el.price}`;
            desc.textContent = `Description: ${el.description}`;
            category.textContent = `Category: ${el.category}`;
            image.src = el.image;
            image.style.width = "200px"

            dataContainer.appendChild(image);
            dataContainer.appendChild(name); 
            dataContainer.appendChild(price);
            dataContainer.appendChild(desc);
            dataContainer.appendChild(category);

        });

    } catch (e) {
        console.log(e);
    }
});

loadMoreBTN.addEventListener('click', async () => {
    currentPage++;
    await fetchProducts();
    console.log(currentPage);
});