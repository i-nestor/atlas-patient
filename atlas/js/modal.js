
// Маска для телефона
document.getElementById('phone').addEventListener('input', function() {
    this.value = this.value.replace(/[^0-9+()-\s]/g, '');
});

// Показать/Скрыть пароль
document.querySelectorAll('.show-password').forEach(function(button) {
    button.addEventListener('click', function() {
        let input = document.querySelector(button.dataset.target);
        if (input.type === 'password') {
            input.type = 'text';
        } else if (input.type === 'text') {
            input.type = 'password';
        }
    });
});

// Валидация формы
const form = document.getElementById("personalDataForm");

form.onsubmit = function(event) {
    event.preventDefault();
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        form.reset(); // Очистить форму
        document.querySelector('.overlay').style.display = 'none';
        alert('Спасибо за ваше обращение!');
    } else if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
    }
}