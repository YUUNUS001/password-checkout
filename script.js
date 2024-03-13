function Confirm() {
    let password1 = document.getElementById("input1").value;
    let password2 = document.getElementById("input2").value;

    if (password1 == password2) {
        alert("Correct password")
    } 

    else {
        alert("password not matched")
    }
}