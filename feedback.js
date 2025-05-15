document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const emailField = document.getElementById('email');
    const userNameInput = document.getElementById('name');
    const userNamePlaceholder = document.getElementById('userNamePlaceholder');
    
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
                // Устанавливаем имя пользователя в модальное окно
                userNamePlaceholder.textContent = userNameInput.value.trim() || 'пользователь';
                
                // Показываем модальное окно
                const modal = new bootstrap.Modal(document.getElementById('successModal'));
                modal.show();
                
                // Сбрасываем форму
                form.reset();
                form.classList.remove('was-validated');
            } else {
                // Показываем ошибки
                form.classList.add('was-validated');
                
                // Особенная проверка для email
                if (emailField.validity.patternMismatch) {
                    emailField.nextElementSibling.textContent = "Введите корректный адрес email";
                }
            }
        });
    }
});
