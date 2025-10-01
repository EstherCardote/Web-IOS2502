let credencial = "PJ"

if (credencial == "Visitante") {
    console.log("Você só pode ir onde seu anfitrião for.");
}
else if (credencial == "Estagiario") {
    console.log("Você pode acessar as baias de trabalho e refeitório.");
}
else if (credencial == "Aprendiz") {
    console.log("Você pode acessar as áreas de lazer, baias e refeitório.");
}
else if (credencial == "CLT") {
    console.log("Você pode acessar tudo, exceto a diretoria.");
}
else if (credencial == "CEO") {
    console.log("O céu é o limite.");
}
else{
    console.log("Credencial Inválida 🚫 ACESSO NEGADO 🙅🏽‍♀️");
}