function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "ahmad2017" && password == "integrity") {
        alert("Login Successfully");
        window.location = "success.html";
    } else if (password == "") {
        alert("Please Input the Password");
        document.getElementById("warning").innerHTML = "Please Input Password";
        document.getElementById("warning").style = "color:red; font-size: 10px";
    } else {
        alert("Login Failed (Wrong Username or Password)");
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("warning").innerHTML = "";
    }
}