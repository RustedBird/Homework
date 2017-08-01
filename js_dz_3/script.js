;(function () {

    function sumSalary() {
        var salaries = {
                'Вася': 100,
                'Петя': 300,
                'Даша': 250
            },
            sum = 0;
        for (var key in salaries) {
            sum = sum + salaries[key];
        }
        console.log(salaries);
        console.log('Сумма зарплат: ' + sum);
    }
    sumSalary();

    function maxSalary() {
        var salaries = {
                'Вася': 100,
                 'Петя': 300,
                 'Даша': 250
            },
            name,
            max = 0;
        if (Object.keys(salaries).length === 0) {
            console.log('Нет сотрудников');
        } else {
            for (var key in salaries) {
                if (salaries[key] >= max) {
                    max = salaries[key];
                    name = key;
                }
            }
        }
        console.log('Сотрудник с самой высокой зарплатой - ' + name);
    }
    maxSalary();

    function square(x) {
        return x * x;
    }
    function map(fn, array) {
        var newArray = [];
        for (var key in array) {
            var a = fn(array[key]);
            newArray.push(a);
        }
        console.log('Старый массив: ' + array);
        console.log('Новый массив: ' + newArray);
    }
    map(square, [1, 2, 3, 4]);

})();