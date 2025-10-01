let diaDaSemana = 5;

const rotina = { // "rotina" é um objeto (um tipo de dicionario)
    0: [
        "Leg Day",
        "Café na Padoca",
        "Fazer marmitas"
    ],
    1: [
        "Café da Manhã",
        "Treinar Costas",
        "Ir trabalhar"
    ],
    2: [
        "Fazer carinho nos gatinhos",
        "Aeróbico",
        "Lavar louça"
    ],
    3: [
        "Café da Manhã",
        "Treinar peito",
        "IOS"
    ],
    4: [
        "Chorar no banho",
        "Chorar Remunerado no trabalho",
        "IOS"
    ],
    5: [
        "Passar aspirador na casa",
        "Almoço com as Amigas",
        "Café com Lágrima com as Amigas"
    ],
    6: [
        "1 hora de corrida",
        "Lavar o Cabelo",
        "Assistir um Filme"
    ]
};

if (rotina[diaDaSemana]) { // retorna a atividade daquele dia
    rotina[diaDaSemana].forEach(atividade => { // forEach é uma função que repete uma ação para cada item do array(lista) // => define oque sera feito com cada atividade
        console.log(atividade);
    });
} else {
    console.log("Dia inválido!");
}