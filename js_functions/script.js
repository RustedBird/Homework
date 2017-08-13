;(function () {
    function nameTransform() {
        var name = prompt('Введите ваше имя');
        if (name.charAt(0) == name.charAt(0).toUpperCase()) {
            alert('Привет, ' + name);
        } else {
            alert("Введите имя с большой буквы");
        }
    }
    nameTransform();

    function minNumber(a, b) {
        var a, b, min;
        (a <= b) ? min = a : min = b;
        return min;
    }
    alert('Минимальное число: ' + minNumber(10, 1));

    function checkNumber() {
        var number = prompt('Введите число');
        if (number > 100 || number === null) {
            return;
        } else if (isNaN(number / 2) == true) {
            alert('Введите число!');
            checkNumber();
        } else {
            alert('Введите число больше 100');
            checkNumber();
        }
    }
    checkNumber();

    function displayNumbers() {
        var a = prompt('Введите первое число'),
            b = prompt('Введите второе число'),
            array = [];
        if (a >= 1 && b >= 1 && parseInt(a) !== a && parseInt(b) !== b) {
            if (a < b) {
                while (a - b != 1) {
                    array.push(a++);
                }
            } else {
                while (b - a != 1) {
                    array.push(b++);
                }
            }
            var newArray = array.join(', ');
            alert(newArray);
        } else {
            alert('Введите положительные числа числа!');
        }
    }
    displayNumbers();
})();