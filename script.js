const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você conhece a síndrome de Burnout?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Afirmação"
            },
            {
                texto: "Não",
                afirmacao: "Afirmação"
            }
        ]
    },
    {
        enunciado: "A síndrome de burnout é um estado de exaustão emocional, física e mental causado por estresse prolongado no trabalho, levando à sensação de desânimo e diminuição da performance. Você sente que está experimentando sinais de burnout no seu trabalho?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Afirmação"
            },
            {
                texto: "Não",
                afirmacao: "Afirmação"
            }
        ]
    },
    {
        enunciado: "Você sente que seu trabalho está afetando sua saúde física e mental?",
        alternativas: [
            {
                texto: "Muito",
                afirmacao: "Afirmação"
            },
            {
                texto: "Nunca",
                afirmacao: "Afirmação"
            }
        ]
    },
    {
        enunciado: "Você percebe uma discrepância entre suas expectativas sobre o trabalho e a realidade que está vivenciando?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Afirmação"
            },
            {
                texto: "Não",
                afirmacao: "Afirmação"
            }
        ]
    },
   
    {
        enunciado: "Você sente que há uma falta de clareza sobre suas responsabilidades e expectativas no trabalho?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Afirmção"
            },
            {
                texto: "Não",
                afirmacao: "Afirmação"
            }
        ]
    },
    {
        enunciado: "Você acha que as demandas do trabalho estão progressivamente ultrapassando seus limites pessoais e profissionais?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Afirmção"
            },
            {
                texto: "Não",
                afirmacao: "Afirmação"
            }
        ]
    },
    {
        enunciado: "Você nota um aumento significativo na sensação de desesperança sobre a sua situação profissional ou o futuro? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Afirmção"
            },
            {
                texto: "Não",
                afirmacao: "Afirmação"
            }
        ]
    },
    {
        enunciado: "Você acha que sua capacidade de manter um bom relacionamento com a equipe está sendo prejudicada por seu nível de estresse? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Afirmção"
            },
            {
                texto: "Não",
                afirmacao: "Afirmação"
            }
        ]
    },
    {
        enunciado: "Você acredita que o reconhecimento e o apoio que recebe no trabalho são insuficientes para suas necessidades? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Afirmção"
            },
            {
                texto: "Não",
                afirmacao: "Afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem dificuldade em reconhecer e aproveitar momentos de sucesso ou realizações no trabalho? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Afirmção"
            },
            {
                texto: "Não",
                afirmacao: "Afirmação"
            }
        ]
    },
    {
        enunciado: "Você sente que sua identidade pessoal ou profissional está sendo afetada negativamente pelo ambiente de trabalho?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Afirmção"
            },
            {
                texto: "Não",
                afirmacao: "Afirmação"
            }
        ]
    },
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Essas perguntas foram para uma pesquisa, se você sente que pode ter este problema, recorrer à um médico ou psicólogo, Obrigada pela atenção!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();