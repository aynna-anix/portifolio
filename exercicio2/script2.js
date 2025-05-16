function somar(){
let n1=0;
let n2=0;
let soma=0;


n1=Number(window.prompt('digite um numero:'));

soma=2025-n1
n2=18-soma


if(soma>18){
        alert("voce ja pode tirar a carteira, voce tem mais de 18 anos");

}
else{
alert("ainda nao e maior de idade,faltam: " + n2 +"ano(s) para tirar a carteira de motorista")
}
}