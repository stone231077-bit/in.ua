document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        type: document.getElementById('type').value,
        message: document.getElementById('message').value
    };
    
    const messageDiv = document.getElementById('formMessage');
    
    // Используем mailto как основной способ отправки
    // Для полноценной работы через сервер нужно настроить Formspree, EmailJS или свой backend
    
    try {
        // Формируем тему письма
        const subject = `Запит: ${formData.type} від ${formData.name}`;
        
        // Формируем тело письма
        const body = `Ім'я: ${formData.name}%0AТелефон: ${formData.phone}%0AEmail: ${formData.email}%0AТип запиту: ${formData.type}%0A%0AПовідомлення:%0A${encodeURIComponent(formData.message)}`;
        
        // Создаем mailto ссылку
        const mailtoLink = `mailto:vasil.ra99@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        
        // Открываем почтовый клиент
        window.location.href = mailtoLink;
        
        // Показываем сообщение об успехе
        messageDiv.className = 'form-message success';
        messageDiv.textContent = 'Відкрито ваш поштовий клієнт. Будь ласка, відправте лист.';
        
        // Очищаем форму
        document.getElementById('contactForm').reset();
        
    } catch (error) {
        console.error('Error:', error);
        messageDiv.className = 'form-message error';
        messageDiv.textContent = 'Помилка при відправці. Спробуйте пізніше або зв\'яжіться з нами безпосередньо.';
    }
    
    // Прокрутка к сообщению
    messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
