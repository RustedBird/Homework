;(function() {
    function calcSumm() {
        var a = +prompt('Введите первое число'),
            b = +prompt('Введите второе число'),
            c = a + b;
        console.log('Сумма равняется: ' + c);
    }
    calcSumm();

    function diceRoll() {
        var a = Math.floor(Math.random() * 6 +1);
        var b = Math.floor(Math.random() * 6 +1);
        console.log('Кости: ' + a + ' ' + b);
    }
    diceRoll();

    function coinFlip() {
        var a = Math.floor(Math.random() *2 +1);
        (a == 1) ? console.log('Орел') : console.log('Решка');
    }
    coinFlip();

    function randomNumber() {
        var a = +prompt('Введите первое число'),
            b = +prompt('Введите второе число');
        console.log('Ваше случайное число: ' + Math.floor(Math.random() * ((b - a) + 1) + a ));
    }
    randomNumber();

    function askJsName() {
        var a = prompt('Каково «официальное» название JavaScript?');
        a == 'ECMAScript' ? console.log('Верно!') : console.log('Не знаете? «ECMAScript»!');
    }
    askJsName();

    function askLogin() {
        var login = prompt('Введите логин:');
        switch (login) {
            case 'Админ':
                var password = prompt('Введите пароль:');
                switch (password) {
                    case null:
                        alert('Вход отменен');
                        break;
                    case 'Черный Властелин':
                        alert('Добро пожаловать!');
                        break;
                    default:
                        alert('Пароль неверен')
                        break;
                }
                break;
            case null:
                alert('Вход отменен');
                break;
            default:
                alert('Я вас не знаю');
                break;
        }
    }
    askLogin();
})();