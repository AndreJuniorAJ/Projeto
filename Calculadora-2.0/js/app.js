const previousOperationText = document.querySelector("#previousOperation");
const currentOperationText = document.querySelector("#currentOperation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor (previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText; //Valor informado na tela
        this.currentOperationText = currentOperationText; //Valor informado na tela
        this.currentOperation = ""; //Valor digitado pelo usuário
    }

    //adcionar digito na tela da calculadora
    addDigit(digit) {
        this.currentOperation = digit;
        this.updateScreen();
    }


    //mudar valores da tela da calculadora
    updateScreen() {
        this.currentOperationText.innerText = this.currentOperation; // colocando o o número digitado que aparece no doom para está aparecendo na tela
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);
 
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;


        //'+' junto com value está convertendo em número
        if(+value >= 0 || value === ".") { // se valor for maior ou igual a zero vai entender que não é um operador
            calc.addDigit(value)// numeros de 0 a 9
        } else {
            console.log("Op:" + value)
        }
    });
})