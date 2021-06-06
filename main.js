let button = document.getElementById("button-contact");

button.addEventListener('mouseover', function(){
    button.style.fontSize = "1.7rem";
    button.style.boxShadow = "5px 5px 1px rgba(0,255,255,0.3)";
    button.style.color = "blue";
})

button.addEventListener('mouseout', function(){
    button.style.fontSize ="1.5rem";
    button.style.boxShadow = "none";
    button.style.color = "black";
})