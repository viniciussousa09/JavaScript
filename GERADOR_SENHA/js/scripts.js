// Seleção de Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

// Funções
const getLetterLowercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUppercase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "(){}[]=></.,!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
    getLetterLowercase,
    getLetterUppercase,
    getNumber,
    getSymbol) => {

    let password = "";

    // Para este exemplo, definimos o tamanho fixo da senha
    const passwordLength = 10;

    const generators = [
        getLetterLowercase,
        getLetterUppercase,
        getNumber,
        getSymbol,
    ];

    for (i = 0; i < passwordLength; i = i + generators.length) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();
            password += randomValue;
        });
    }

    password = password.slice(0, passwordLength);

    generatedPasswordElement.style.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
    generatePassword(getLetterLowercase,
        getLetterUppercase,
        getNumber,
        getSymbol);
});