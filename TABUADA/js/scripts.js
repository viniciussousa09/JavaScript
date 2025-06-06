// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationOperations = document.querySelector("#multiplication-operations");
const multiplicationTitleSpan = document.querySelector("#multiplication-title span");

// Funções
const createTable = (number, multiplicatorNumber) => {
    // Limpa o conteúdo anterior da tabela de operações
    multiplicationOperations.innerHTML = "";

    // Atualiza o título com o número da tabuada
    if (multiplicationTitleSpan) { // Verifica se o span foi encontrado
        multiplicationTitleSpan.innerText = number;
    }


    // AJUSTADO: O loop deve ir até multiplicatorNumber (inclusive)
    for (let i = 1; i <= multiplicatorNumber; i++) { 
        const result = number * i;

        // ADICIONADO: Criação e adição dos elementos da tabuada ao HTML
        const template = `
            <div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>
        `;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");

        if (row) { // Verifica se o row foi criado corretamente
           multiplicationOperations.appendChild(row);
        }
    }
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumberValue = +multiplicationInput.value; // Renomeado para evitar confusão com a variável de seleção

    // Verificação se os valores são números válidos
    if (isNaN(multiplicationNumber) || isNaN(multiplicatorNumberValue) || multiplicatorNumberValue < 1) {
        // Se a validação no HTML falhar ou JS estiver desabilitado, ou valor for inválido
        // Poderia exibir uma mensagem de erro para o usuário aqui
        multiplicationOperations.innerHTML = "<p>Por favor, insira números válidos. O multiplicador deve ser ao menos 1.</p>";
        if (multiplicationTitleSpan) {
            multiplicationTitleSpan.innerText = "";
        }
        return;
    }

    createTable(multiplicationNumber, multiplicatorNumberValue);
});