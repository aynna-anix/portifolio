let aletorio = parseInt (Math.random () * 101);
let computador 
let jogador

function adnum()
  jogador= nuber( window.prompt("digite um numero de 0a 10"));
  let resultado = document.querySelector('#resultado');

  if ( jogador != aletorio) {
    if (jogador>aletorio ){
        resultado.innerHTML ='<p>voce errou, tente um numero menor</p>';
    }
    else{
        resultado.innerHTML = '<p> voce erro , tente um numero maior</p>';
    }
  
  else{
    resultado.innerHTML= '<p> parabens!, voce acertou, o numero era $(aletorio)</p>';

  }

}




