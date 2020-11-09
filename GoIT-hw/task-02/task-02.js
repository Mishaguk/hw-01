'use sctrict'
const total = 100;
const ordered = 10000000;

let message;


if(ordered > 100){
    message = 'На складе не достаточно товаров!'; 
} else {
    message = 'Заказ оформлен , с вами свяжется менеджер'
}

console.log(message)