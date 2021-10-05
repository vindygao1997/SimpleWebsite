function validate()
{
var username = document.getElementById("user").value;
var password = document.getElementById("password").value;
if (username == "user" && password == "password") {
    alert ("You have successfully logined in!");
    return false;
} else {
    alert ("Login failed");
}




}