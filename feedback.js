document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const emailField = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const successMessage = document.getElementById('successMessage');
    
    if (form) {
        // Валидация email при вводе
        emailField.addEventListener('input', function() {
            if (this.validity.patternMismatch) {
                this.setCustomValidity("Введите корректный адрес email");
            } else {
                this.setCustomValidity("");
            }
        });
        
        // Обработка отправки формы
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            event.stopPropagation();
            
            if (form.checkValidity()) {
                // Устанавливаем имя в сообщение
                const userName = nameInput.value.trim();
                if (userName) {
                    successMessage.innerHTML = `Спасибо, <strong>${userName}</strong>!`;
                } else {
                    successMessage.textContent = "Спасибо!";
                }
                
                // Показываем модальное окно
                const modal = new bootstrap.Modal(document.getElementById('successModal'));
                modal.show();
                
                // Сбрасываем форму
                form.reset();
                form.classList.remove('was-validated');
            } else {
                // Показываем ошибки
                form.classList.add('was-validated');
                
                if (emailField.validity.patternMismatch) {
                    emailField.nextElementSibling.textContent = "Введите корректный адрес email";
                }
            }
        });
    }
});
