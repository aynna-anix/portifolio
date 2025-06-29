function gerartabuada() {
    // Pede ao usuário para digitar um número
    const input = prompt('Digite um número para ver sua tabuada');
    const numero = Number(input);
    const ResultadoElement = document.getElementById('result');

    // Verificar se o valor fornecido é um número válido 
    if (isNaN(numero)) {
        ResultadoElement.textContent = "Por favor, digite um número válido!";
        return;
    }

    let contador = 1;
    const resultado = [];

    // Loop while para gerar a tabuada  
    while (contador <= 10) {
        resultado.push(`${numero} x ${contador} = ${numero * contador}`);
        contador++;
    }



}
