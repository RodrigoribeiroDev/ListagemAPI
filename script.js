const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff"); // Corrigido o seletor
const lamp = document.getElementById("lamp");    // Corrigido o seletor

function lampOn() {
    lamp.src = './img/lampon.jpg';
    console.log("Ligado");
}

btnOn.addEventListener("click", lampOn);


function lampOff() {
    lamp.src = './img/lampof.jpg';
    console.log("Desligado");
}

btnOff.addEventListener("click", lampOff);



lamp.addEventListener("mouseover", function(){
    lamp.src = './img/lampbroken.jpg';
    console.log("Quebrou");
})

lamp.addEventListener("mouseout", function(){
    lamp.src = './img/lampof.jpg'
    console.log("A lâmpada está ok.")
})




const input = document.getElementById("input")
const num = document.getElementById("num")

input.addEventListener ("input", function(){
    const result = input.value.length
    document.getElementById("num").innerHTML = result;
    
})

