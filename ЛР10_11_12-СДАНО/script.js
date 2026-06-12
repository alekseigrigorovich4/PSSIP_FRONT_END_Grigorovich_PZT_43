// ========== ЗАДАНИЕ 1: Дата ==========
function showDate() {
    let now = new Date();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    alert(month + "-" + year);
}

// ========== ЗАДАНИЕ 2: do..while (вариант 4) ==========
function task2_doWhile() {
    let n = 4;
    let count = n + 5; // 9 раз
    let name = "Григорович Алексей";
    let i = 1;
    let output = "";
    do {
        output += i + ". " + name + "<br>";
        i++;
    } while (i <= count);
    document.getElementById("task2").innerHTML = output;
}

// ========== ЗАДАНИЕ 3: Массивы ==========
function task3_arrays() {
    let original = [];
    for (let i = 0; i < 10; i++) {
        original.push(Math.floor(Math.random() * 21) - 10);
    }

    let reversed = [...original].reverse();

    let product = 1;
    let hasNegative = false;
    for (let i = 0; i < original.length; i++) {
        if (original[i] < 0) {
            product *= original[i];
            hasNegative = true;
        }
    }
    if (!hasNegative) product = 0;

    let html = "<b>Исходный массив:</b> " + original.join(", ") + "<br>";
    html += "<b>Массив в обратном порядке:</b> " + reversed.join(", ") + "<br>";
    html += "<b>Произведение отрицательных элементов:</b> " + product;
    document.getElementById("task3").innerHTML = html;
}

// ========== ЗАДАНИЕ 4: Пользовательская функция ==========
function calculateY(x) {
    let denominator = 2 * x - 5;
    if (denominator === 0) {
        alert("Ошибка: деление на ноль (2x - 5 = 0)");
        return null;
    }
    let y = (3 * x + 1) / denominator;
    return y;
}

function task4_calc() {
    let x = 2.5;
    let result = calculateY(x);
    let html = "<b>Формула:</b> y = (3x + 1) / (2x - 5)<br>";
    html += "<b>При x = " + x + "</b><br>";
    if (result !== null) {
        html += "<b>Результат:</b> y = " + result.toFixed(4);
    } else {
        html += "<b>Результат:</b> ошибка (см. диалоговое окно)";
    }
    document.getElementById("task4").innerHTML = html;
}

// ========== ЗАДАНИЕ 5: Строки ==========
function task5_strings() {
    let S1 = "Алексей";
    let S2 = "программирование спорт музыка";

    let len1 = S1.length;

    let S2_spaced = S2.replace(/ /g, "   ");

    let S1_new = S1.replace("Алексей", "Павел");

    let html = "<b>S1 (Имя):</b> " + S1 + "<br>";
    html += "<b>Длина S1:</b> " + len1 + "<br>";
    html += "<b>S2 (Увлечения):</b> " + S2 + "<br>";
    html += "<b>S2 с дополнительными пробелами:</b> " + S2_spaced + "<br>";
    html += "<b>S1 после замены:</b> " + S1_new + "<br>";

    document.getElementById("task5").innerHTML = html;
}