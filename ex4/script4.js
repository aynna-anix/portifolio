function media() {
let nota1= Number (window.prompt("digite a primera nota:"));
let nota2= Number (window.prompt("digite a segunda nota:"));
let nota3= Number (window.prompt("digite a tercera nota:"));

let media =( nota1+nota2+nota3) /3;
 
let resutado = document.querySelector('#resutado');
resultado.innerHTML = `<p>o resultado é ${media}</p>`;

console.log(resultado);

}

if (media <6) {

    let med =6 -media
    resultado.innerHTML= `<p> reprovado </p>
}