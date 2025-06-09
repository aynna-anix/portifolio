let mostrarresutado= document.querySelector( "#resultado")
let inscritos = 0;
let times = 0;


function inscrever () {
     inscritos ++;
times =parseInt (inscritos / 3);



mostrarresutado.innerHTML = ´<p>numero de inscritos: $(inscritos).</p>

}