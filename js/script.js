

function comparacao(){
    var n1 = document.querySelector("#numero1");
    var n2 = document.querySelector("#numero2");
    var maior = document.querySelector("h3");
    if ((n1.value && n2.value !== "") && (n1.value && n2.value !== null) && (n1.value && n2.value !== undefined)&& (n1.value <= 100 && n2.value <= 100 )){
        if (n1.value > n2.value){
            maior.innerHTML = `O maior número é ${n1.value}`;
        }else if(n1.value < n2.value){
            maior.innerHTML = `O maior número é ${n2.value}`;
        }else{
            maior.innerHTML = `Deu empate, o número é <br>${n1.value}`
            
        }
    }
}