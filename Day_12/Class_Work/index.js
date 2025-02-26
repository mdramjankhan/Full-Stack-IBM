let form = document.getElementById("userForm");
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log(e);
    let fullName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    let obj = {
        fullName, email, number, password, confirmPassword
    }

    console.log(obj);

    if(obj.password != obj.confirmPassword){
        return alert("Password do not match !!");
    }

    // if(obj.number <10  && obj.number > 10){
    //     return alert("Number should not less or greater than 10 !!");
    // }

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = obj.fullName;
    let td2 = document.createElement("td");
    td2.innerText = obj.email;
    let td3 = document.createElement("td");
    td3.innerText = obj.number;
    let td4 = document.createElement("td");
    td4.innerText = obj.password;
    let td5 = document.createElement("td");
    td5.innerText = obj.confirmPassword;

    tr.append(td1, td2, td3, td4, td5,);

    let tbody = document.getElementById("tbody");
    tbody.appendChild(tr);

    

})
