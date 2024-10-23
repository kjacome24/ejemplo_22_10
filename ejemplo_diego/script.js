var contador1 = 0; 
var boton1 = document.getElementById("like1") 
var contador1_text = document.getElementById("contador1_text")

boton1.addEventListener("click", function(){
    contador1++;
    contador1_text.textContent = contador1 + "like(s)"; 
})

var contador2 = 0; 
var boton2 = document.getElementById("like2") 

boton2.addEventListener("click", function(){
    contador2++;
    boton2.textContent = contador2 + "like(s)" + "like"; 
})

var contador3 = 0; 
var boton3 = document.getElementById("like3") 

boton3.addEventListener("click", function(){
    contador3++;
    boton3.textContent = contador3 + "like(s)" + "like"; 
})


/**/
/**/