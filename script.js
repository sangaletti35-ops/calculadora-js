// Referências a elementos do DOM e variáveis de estado global
let display = document.getElementById("display");
let currentInput = ""
let currentOperator = ""

/**
 * Adiciona um número ou ponto ao texto atual e atualiza a tela.
 */
function appendNumber (value) {
    currentInput += value
    display.textContent = currentInput;
}

/**
 * Adiciona um operador matemático à expressão.
 * Impede a inserção de operadores caso o visor esteja vazio.
 */
function oppendOperator (operator) {
    if (currentInput === "" && operator !== ".") return 
    currentInput += operator;
    display.textContent = currentInput;
}

/**
 * Avalia e calcula a expressão matemática informada.
 * Trata exceções de sintaxe e limita casas decimais para números fracionários.
 */
function calculate () {
    try {
        let result = eval(currentInput)
        if (!Number.isInteger(result)){
            result = result.toFixed(2)
        }
        currentInput = result;
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = "erro";
        currentInput = "";
    }
}

/**
 * Reinicia o estado do cálculo e limpa o visor da calculadora.
 */
function cleanDisplay(){
  currentInput = "";
  display.textContent = currentInput;  
}

