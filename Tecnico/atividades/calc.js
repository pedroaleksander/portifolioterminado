let hi = document.getElementById("horaInicial");
let mi = document.getElementById("minInicial");
let hf = document.getElementById("horaFinal");
let mf = document.getElementById("minFinal") ;
let resultado = document.getElementById("resultado");

function soma(){
   let somaHora = Number(hi.value) + Number(hf.value);
   let somaMin = Number(mi.value) + Number(mf.value);
    while(somaMin > 59){
        somaMin -= 60;
        somaHora ++;
}
resultado.innerHTML = somaHora + ":" + somaMin

}

function sub(){
    let divHora = Number(hf.value) - Number(hi.value) * -1;
    let divMin = Number(mf.value) - Number(mi.value) * -1;

 resultado.innerHTML = divHora + ":" + divMin
}