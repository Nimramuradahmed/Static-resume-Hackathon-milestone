const toggleButton=document.getElementById("toggle-declaration") as HTMLButtonElement
const declaration=document.getElementById("declaration") as HTMLElement
/* wait to the listener to click on the button= eventlistener and when the user clicks we made an annonymous function to run */
toggleButton.addEventListener("click",()=>{
    if (declaration.style.display==="none")
    {
        declaration.style.display="block"
    }
    else{
        declaration.style.display ="none"
    }
});