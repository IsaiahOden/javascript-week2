// some code goes here.
var nameInput;
function alertuser(){
    alert(`Thank you for signing in ${nameInput}`);
};

window.onload = function() {
    console.log(window.location.pathname);
    if (window.location.pathname === "/Assignment/index.html") {
        nameInput = prompt(`Congratulations and Welcome to Fight Club!!! \n \nPlease Enter Your Name`)
    };
    if (window.location.pathname !== "/Assignment/index.html") {
        return;
    }
        while (nameInput === "" || nameInput === undefined || nameInput === null) {
            nameInput = prompt('Please enter something');
        }; 
        if (nameInput !== "" || nameInput !== undefined || nameInput !== null) {
            alertuser();
        };
};

document.getElementById("main-form").addEventListener("submit", event => {
    event.preventDefault();

    // Select the input fields
    let emailInput = document.getElementById("userEmail").value;
    let subjectInput = document.getElementById("userSubject").value;
    let messageInput = document.getElementById("userMessage").value;
    let subjectNum = Math.floor(Math.random() * 1500);

    
    let encodedMessage = encodeURIComponent(messageInput);


    let mailtoLink = `mailto:headcoach@example.com?cc=isaiahoden811@gmail.com?subject=${subjectInput + ' ' + subjectNum}&body=${encodedMessage}`;

    // Check stuff
    console.log(mailtoLink);
    console.log(emailInput);

    // Open the email client
    window.location.href = mailtoLink;

    document.body.innerHTML = "<h1>Good Job!</h1> <p><a href ='index.html'>Home Button</a>";
    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/Assignment/index.html" 
        // for some reason I could not get the path version to work, kept changing the URL to /Assignment/Assignment/Index.html or /index.html instead of /Assignment/index.html
    }, 5000);



    

    // // Version 1
    // alert('You are going back home ET');
    // window.location.href = "http://127.0.0.1:5500/Assignment/index.html";
});