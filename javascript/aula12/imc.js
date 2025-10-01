let repetir; // Variável para armazenar a resposta do usuário se ele quer calcular o IMC novamente

do { // tudo dentro desse bloco sera executado pelo menos uma vez e depois repetido enquanto a condição for verdadeira
    let peso = parseFloat(prompt("Digite o seu peso em kg: "));
    let altura = parseFloat(prompt("Digite a sua altura: "));

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal");
    } else if (imc >= 25.0 && imc <= 29.9) {
        alert("Sobrepeso");
    } else if (imc >= 30.0 && imc <= 34.9) {
        alert("Obesidade grau 1");
    } else if (imc >= 35.0 && imc <= 39.9) {
        alert("Obesidade grau 2");
    } else if (imc >= 40) {
        alert("Obesidade grau 3");
    } else {
        alert("IMC fora das faixas tratadas");
    }

    repetir = prompt("Quer calcular novamente? (s/n)").toLowerCase();

} while (repetir === 's');