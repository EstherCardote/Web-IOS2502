let login = prompt("Insira seu e-mail: ")
let senha = prompt("Insira sua senha: ")  
let loginCerto = "thiago@email.com"
let senhaCerta = "batatinha123"

// Validar se o login é o login certo e se a senha é a senha certa.
if (login == loginCerto && senha == senhaCerta) {
    alert("Credencial validada.")

    alert(" Opção 1: Cartao de credito \n Opcao 2: Consignado \n Opção 3: Emprestimo \n Opção 4: Renegociação \n Opção 0: Falar com atendente")

    // Prompt vai dentro de Number porque queremos opções com números, ou seja, é feita uma conversão de string para number
    let opcao = Number(prompt("Escolha a opção: "))

    switch (opcao) {
        case 1:
            alert("Você selecionou Cartão de Crédito. Redirecionando para o setor responsável.")
            break;
        case 2:
            alert("Você selecionou Consignado. Redirecionando para o setor responsável.")
            break;
        case 3:
            alert("Você selecionou Emprestimo. Redirecionando para o setor responsável.")
            break;
        case 4:
            alert("Você selecionou Renegociação. Redirecionando para o setor responsável.")
            break;
        case 0:
            alert("Aguarde enquanto localizamos um atendente.")
            break;
          
        default:
            alert("O usuário não selecionou uma opção valida.")
            break;
    }
}
// Se o login ou a senha que o usuário inseriu não forem iguais a que temos, ele não pode fazer login no aplicativo.
else{
    alert("Login ou senha Incorretos!")
}