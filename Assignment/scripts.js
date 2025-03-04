// some code goes here.
document.write("HERE'S JAVA")
var nameInput;

window.onload = function() {
    if (window.location.pathname === "/Assignment/index.html") {
        nameInput = prompt(`Congratulations and Welcome to Fight Club!!! \n \nPlease Enter Your Name`)
    }
        if (typeof nameInput === "string") {
            alert(`Thank You For Signing In ${nameInput}!`)

        } else {
            nameInput = prompt("Dude/Dudette your name has to be letters")
        }

    
}