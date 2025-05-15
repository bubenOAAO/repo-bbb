document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    const nameInput = document.getElementById('name');
    const successMessage = document.getElementById('successMessage');
    
    if (form) {
        // Обработка отправки формы
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (form.checkValidity()) {
                // Получаем и очищаем имя пользователя
                const userName = nameInput.value.trim();
                
                // Формируем сообщение
                if (userName) {
                    successMessage.textContent = `Спасибо, ${userName}!`;
                } else {
                    successMessage.textContent = 'Спасибо!';
                }
                
                // Показываем модальное окно
                const modal = new bootstrap.Modal(document.getElementById('successModal'));
                modal.show();
                
                // Сбрасываем форму
                form.reset();
            } else {
                // Показываем ошибки, если форма не валидна
                form.classList.add('was-validated');
            }
        }, false);
    }
});
