let login
let senha
let loginCerto = "thiago@email.com"
let senhaCerta = "batatinha123"

// Enquanto a senha que o usuário inserir for diferente da senha certa continuaremos pedindo para que ele insira a senha novamente.

// while (senha != senhaCerta) {
//    senha = prompt("Insira sua senha:")  
//}

// Do = Faça | While = enquanto. O que da nome a estrutura dowhile, ou seja, faça enquanto.
// Dowhile executa o codigo uma vez antes de fazer a comparação.

do {
    login = prompt("Insira seu e-mail: ")
} while (login != loginCerto);

do {
    senha = prompt("Insira sua senha: ")
} while (senha != senhaCerta);

// Peça a senha pelo menos uma vez, e caso o usuario não coloque a senha certa, repita o pedido.