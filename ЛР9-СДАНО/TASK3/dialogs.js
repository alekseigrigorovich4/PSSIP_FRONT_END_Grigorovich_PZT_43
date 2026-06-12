function showAlert() {
    alert("Это сигнальное окно! Нажмите OK, чтобы продолжить.");
}

function showConfirm() {
    let result = confirm("Вы уверены, что хотите продолжить?");
    if (result) {
        document.getElementById("output").innerHTML = "✅ Вы нажали OK!";
    } else {
        document.getElementById("output").innerHTML = "❌ Вы нажали Отмена!";
    }
}

function showPrompt() {
    let name = prompt("Пожалуйста, введите ваше имя:", "Гость");
    if (name != null && name != "") {
        document.getElementById("output").innerHTML = "Привет, " + name + "! Рад тебя видеть!";
    } else {
        document.getElementById("output").innerHTML = "Вы не ввели имя.";
    }
}