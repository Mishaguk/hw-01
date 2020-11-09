'use sctrict'
const Китай = 100; 
const Чили = 250;
const Австралия = 170;
const Индия = 80;
const Ямайка = 120;

const promptLabel = `Укажите страну , в которую будет доставка`;
let userChoise = prompt(promptLabel);
let message;

if (userChoise === null) {
    message = 'Очень жаль , приходите еще';
} else {
    userChoise = (userChoise);

    switch (userChoise) {
        case Китай:
            message = 'Доставка в Китай будет стоить 100 кредитов';
            break;
        
        case Чили:
            message = 'Доставка в Чили будет стоить 250 кредитов';
            break;
        
        case Австралия:
            message = 'Доставка в Австралию будет стоить 170 кредитов';
            break;
        
        case Индия:
            message = 'Доставка в Индию будет стоить 80 кредитов';
            break;
        
        case Ямайка:
            message = 'Доставка в Ямайку будет стоить 120 кредитов';
            break;
        default:
        message = 'Ты ничего не выбрал';
                        }
}  

console.log(message);