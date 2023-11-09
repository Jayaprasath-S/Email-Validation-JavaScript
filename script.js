function valemail(){

var label = document.getElementById("email-label")
var emailid = document.getElementById("email-field")
var error = document.getElementById("error")


if(!emailid.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
){
    error.innerHTML = "Please enter a valid email"
    emailid.style.borderBottomColor = "red"
    return false;
}

error.innerHTML = ""
emailid.style.borderBottomColor = "green"
return true;

}
