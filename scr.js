let pole = document.getElementById('field1')
let cnopca = document.getElementById('btn')
let rezult = document.getElementById('rezult')


cnopca.onclick = function() {
    if (pole.value != '') {
        if (pole.value >= 999999) {
            rezult.textContent = 'Введено много чисел!';
        } else if (pole.value % 2 == 0) {
            rezult.textContent = 'Это чётное число!';
        } else {
            rezult.textContent = 'Это нечётное число!';
        }
    }
}