// some code goes here.
document.write("HERE'S JAVA")
var nameInput;
function alertuser(){
    alert(`Thank you for signing in ${nameInput}`);
};

window.onload = function() {
    if (window.location.pathname === "/Assignment/index.html") {
        nameInput = prompt(`Congratulations and Welcome to Fight Club!!! \n \nPlease Enter Your Name`)
    }
        while (nameInput === "") {
            nameInput = prompt('Please enter something');
        } 
        alertuser();
        

    
}