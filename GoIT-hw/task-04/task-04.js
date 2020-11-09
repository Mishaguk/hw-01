'use strict'

const credits = 23580;
const pricePerDroid = 3000;
const promptLabel = `Введите количество дроидов которые вы хотите купить`;

let userChoise = prompt(promptLabel);
const totalPrice = (pricePerDroid * userChoise);    
let message;

if (userChoise === null) {
    message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} else if (totalPrice < credits) {
    console.log('Вы купили ' + userChoise + ' дроидов , на счету осталось ' + (credits - totalPrice) + ' кредитов') ;    
}  
console.log(message)
