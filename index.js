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
            "Kreacher"
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
            "Hippogrifo"
        ],
        correta: 2
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