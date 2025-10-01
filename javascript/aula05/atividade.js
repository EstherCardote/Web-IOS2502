console.log("💪🏽🍨🍦 Bem vindo a sorveteria Poderosas 💪🏽🍨🍦");

let dinheiroDoCliene = 1.0
let precoSorvete = 2.0
let saborEscolhido = "morango"

if (dinheiroDoCliene >= precoSorvete){ // Esse if verifica se o cliente tem dinheiro suficiente
    console.log("Temos os seguintes sabores: Chocolate, morango e céu-azul.");
    if (saborEscolhido == "chocolate" || saborEscolhido == "morango" || saborEscolhido == "céu-azul.") {
        console.log("🍨🍦 Aqui esta o seu sorvete de " + saborEscolhido);
    }
    else{
        console.log("Não temos o sabor escolhido. 😯");
    }     
}
else{ // Esse else executa se o cliente não tem dinheiro suficiente
    console.log("Você é pobre. 🙄");
}