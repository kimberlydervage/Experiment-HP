const perguntas = [
    {
        pergunta: "Quem é o diretor da Escola de Magia e Bruxaria de Hogwarts nos primeiros seis livros da série Harry Potter?",
        respostas: [
            "Severo Snape",
            "Alvo Dumbledore",
            "Minerva McGonagall"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a casa de Hogwarts à qual Harry Potter pertence?",
        respostas: [
            "Grifinória",
            "Sonserina",
            "Corvinal"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o nome do elfo doméstico que serve à família Malfoy?",
        respostas: [
            "Dobby",
            "Winky",
            "Monstro"
        ],
        correta: 2
    },
    {
        pergunta: "Quem é o melhor amigo de Harry Potter?",
        respostas: [
            "Ron Weasley",
            "Hermione Granger",
            "Neville Longbottom"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é o feitiço usado para invocar a Varinha das Varinhas?",
        respostas: [
            "Expelliarmus",
            "Accio",
            "Expecto Patronum"
        ],
        correta: 1
    },
    {
        pergunta: "Quem é o inimigo principal na série Harry Potter?",
        respostas: [
            "Voldemort",
            "Bellatrix Lestrange",
            "Draco Malfoy"
        ],
        correta: 0
    },
    {
        pergunta: "O que são os Comensais da Morte?",
        respostas: [
            "Alunos da Sonserina",
            "Seguidores de Voldemort",
            "Criaturas mágicas perigosas"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a criatura que guarda a entrada para a Câmara Secreta em Hogwarts?",
        respostas: [
            "Acromântulas",
            "Testrálios",
            "Basilisco"
        ],
        correta: 2
    },
    {
        pergunta: "Quem é o professor de Defesa Contra as Artes das Trevas no primeiro livro?",
        respostas: [
            "Gilderoy Lockhart",
            "Quirinus Quirrell",
            "Dolores Umbridge"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é o animal de estimação de Hagrid?",
        respostas: [
            "Gato",
            "Cão",
            "Hipogrifo"
        ],
        correta: 1
    },
    {
        pergunta: "Quando Harry Potter nasceu?",
        respostas: [
            "1° de julho, 1980",
            "31 de julho, 1980",
            "31 de junho, 1980",
        ],
        correta: 1
    },
    {
        pergunta: "Qual destes é o Weasley mais velho?",
        respostas: [
            "Gui Weasley",
            "Percy Weasley",
            "Carlinhos Weasley",
        ],
        correta: 0
    },
    {
        pergunta: "Qual Horcrux foi a segunda a ser destruída?",
        respostas: [
            "O anel",
            "O medalhão",
            "O diadema",
        ],
        correta: 0
    },
    {
        pergunta: "Com quem Harry foi ao Baile de Inverno?",
        respostas: [
            "Parvati Patil",
            "Hermione Granger",
            "Padma Patil",
        ],
        correta: 0
    },
    {
        pergunta: "Fred Weasley perdeu qual orelha?",
        respostas: [
            "A esquerda",
            "A direita",
            "Jorge foi quem perdeu a orelha",
        ],
        correta: 2
    },
    {
        pergunta: "Qual o nome completo de Dumbledore?",
        respostas: [
            "Alvo Brian Percival Wulfrico Dumbledore",
            "Alvo Wulfrico Percival Brian Dumbledore",
            "Alvo Percival Wulfrico Brian Dumbledore",
        ],
        correta: 2
    },
    {
        pergunta: "Qual o patrono de Luna Lovegood?",
        respostas: [
            "Uma lebre",
            "Um gato",
            "Uma joaninha",
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes ingredientes NÃO é usado para fazer uma poção Polissuco?",
        respostas: [
            "Hemeróbio",
            "Descurainia",
            "Agapanto",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o nome do feitiço que faz com que o alvo escute apenas zumbido?",
        respostas: [
            "Abaffilato",
            "Ablaffato",
            "Abaffiato",
        ],
        correta: 2
    },
    {
        pergunta: "Rita Skeeter se transforma em qual animal para poder espionar as pessoas?",
        respostas: [
            "Um besouro",
            "Uma aranha",
            "Uma formiga",
        ],
        correta: 0
    },
    {
        pergunta: "Qual destas pessoas Belatrix NÃO matou?",
        respostas: [
            "Ninfadora Tonks",
            "Remo Lupin",
            "Sirius Black",
        ],
        correta: 1
    }
];

const quiz = document.querySelector("#quiz")
const template = document.querySelector("template")

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector("#acertos span")
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector("h3").textContent = item.pergunta    

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector("dl dt").cloneNode(true)
        dt.querySelector("span").textContent = resposta
        dt.querySelector("input").setAttribute("name", "pergunta-" + perguntas.indexOf(item))
        dt.querySelector("input").value = item.respostas.indexOf(resposta)
        dt.querySelector("input").onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            
            corretas.delete(item)  
            if(estaCorreta) {
              corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
        }

        quizItem.querySelector("dl").appendChild(dt)
    }

    quizItem.querySelector("dl dt").remove()
    
    quiz.appendChild(quizItem)
}
