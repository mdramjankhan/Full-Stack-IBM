let cartData = JSON.parse(localStorage.getItem("DataCart"));
function showCartData() {

    let box=document.createElement("div");
        box.className="parentBox";
    
        let h2=document.createElement("h2");
        h2.innerText=el.name;

        let p1=document.createElement("p");
        p1.innerText=el.category;

        let p2=document.createElement("p");
        p2.innerText=el.price;

        let p3=document.createElement("p");
        p3.innerText=el.rating;

        let img=document.createElement("img");
        img.src=el.image;

        box.append(h2,img,p1,p2,p3);
        document.getElementById("products").append(box);
        let btn = document.createElement("button");
        btn.innerText = "Delete"
        btn.onclick = function() {
            localStorage.removeItem("DataCart");
            window.location.reload();
        }
        box.appendChild(btn);
    
}

showCartData();