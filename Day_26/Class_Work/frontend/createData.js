const button = document.getElementById('submit-products');

button.addEventListener('click', async()=> {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("img").value;
    const category = document.getElementById("category").value

    const obj = {
        name,price,category,image,description
    }

    const res = await fetch('http://localhost:5000/v1/api/create-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    });

    const data = await res.json();
    console.log(data);

})