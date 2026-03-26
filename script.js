document.addEventListener('DOMContentLoaded', () => {
    // Form 1: Toolkit Download
    const toolkitForm = document.getElementById('toolkit-form');
    if (toolkitForm) {
        toolkitForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = toolkitForm.querySelector('input[type="email"]');
            const btn = toolkitForm.querySelector('button');
            const successMsg = toolkitForm.querySelector('.success-msg');
            
            if (emailInput.value) {
                // Simulate processing
                btn.textContent = 'PROCESANDO...';
                btn.disabled = true;
                
                setTimeout(() => {
                    successMsg.classList.remove('hidden');
                    btn.textContent = 'DESCARGAR';
                    btn.disabled = false;
                    
                    // Redirigimos a la URL de descarga que proporciones
                    window.location.href = 'https://www.facebook.com';
                }, 1000);
            }
        });
    }

    // Form 2: Newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const btn = newsletterForm.querySelector('button');
            const successMsg = newsletterForm.querySelector('.success-msg');
            const inputGroup = newsletterForm.querySelector('.input-group');
            
            if (emailInput.value) {
                // Simulate processing
                btn.textContent = 'ENVIANDO...';
                btn.disabled = true;
                
                // URL de tu Webhook de n8n
                const WEBHOOK_URL = 'https://vmi3120681.contaboserver.net/webhook/linktree-email';
                
                try {
                    await fetch(WEBHOOK_URL, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ email: emailInput.value })
                    });
                    
                    successMsg.classList.remove('hidden');
                    inputGroup.classList.add('hidden'); // Ocultar input tras éxito
                    
                } catch (error) {
                    console.error("Error al enviar el correo", error);
                    btn.textContent = 'ERROR. REINTENTAR';
                    btn.disabled = false;
                }
            }
        });
    }
});