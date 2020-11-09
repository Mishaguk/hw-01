'use sctrict'

const ADMIN_PASSWORD = '12344321';

const promptLabel = `Введите пароль`;
let userChoise = prompt(promptLabel)
let message;
if (userChoise === null) {
    message = 'Отменено пользователем!';
} else if (userChoise === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен , неверный пароль!';
}
console.log(message)