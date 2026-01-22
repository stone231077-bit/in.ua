// ============================================
// НАСТРОЙКА ОТПРАВКИ ФОРМЫ
// ============================================
// Вариант 1: Formspree (рекомендуется)
// 1. Зарегистрируйтесь на https://formspree.io
// 2. Получите ваш Form ID
// 3. Замените null ниже на ваш ID, например: 'YOUR_FORM_ID'
const FORMSPREE_ID = null; // Замените на ваш Form ID для активации

// Вариант 2: EmailJS
// Раскомментируйте и настройте при необходимости
// const EMAILJS_SERVICE_ID = null;
// const EMAILJS_TEMPLATE_ID = null;
// const EMAILJS_PUBLIC_KEY = null;

// Email для отправки через mailto (используется если Formspree не настроен)
const RECIPIENT_EMAIL = 'vasil.ra99@gmail.com';

// ============================================

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
    const submitBtn = document.querySelector('.submit-btn');
    const originalBtnText = submitBtn.textContent;
    
    // Показываем загрузку
    submitBtn.disabled = true;
    submitBtn.textContent = 'Відправка...';
    messageDiv.className = 'form-message';
    messageDiv.style.display = 'none';
    
    try {
        // Если настроен Formspree - используем его
        if (FORMSPREE_ID) {
            const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    type: formData.type,
                    message: formData.message,
                    _subject: `Новий запит: ${formData.type} від ${formData.name}`
                })
            });
            
            if (response.ok) {
                messageDiv.className = 'form-message success';
                messageDiv.textContent = 'Дякуємо! Ваш запит відправлено. Ми з вами зв\'яжемося найближчим часом.';
                document.getElementById('contactForm').reset();
            } else {
                throw new Error('Помилка відправки через Formspree');
            }
        } else {
            // Fallback: используем mailto
            const subject = `Запит: ${formData.type} від ${formData.name}`;
            const body = `Ім'я: ${formData.name}%0AТелефон: ${formData.phone}%0AEmail: ${formData.email}%0AТип запиту: ${formData.type}%0A%0AПовідомлення:%0A${encodeURIComponent(formData.message)}`;
            const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
            
            window.location.href = mailtoLink;
            
            messageDiv.className = 'form-message success';
            messageDiv.textContent = 'Відкрито ваш поштовий клієнт. Будь ласка, відправте лист.';
            document.getElementById('contactForm').reset();
        }
        
    } catch (error) {
        console.error('Error:', error);
        messageDiv.className = 'form-message error';
        messageDiv.textContent = 'Помилка при відправці. Спробуйте пізніше або зв\'яжіться з нами безпосередньо.';
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        messageDiv.style.display = 'block';
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
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
