var toggleButton = document.getElementById("toggle-declaration");
var declaration = document.getElementById("declaration");
/* wait to the listener to click on the button= eventlistener and when the user clicks we made an annonymous function to run */
toggleButton.addEventListener("click", function () {
    if (declaration.style.display === "none") {
        declaration.style.display = "block";
    }
    else {
        declaration.style.display = "none";
    }
});
