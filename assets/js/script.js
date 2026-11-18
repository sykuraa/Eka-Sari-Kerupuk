document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('mobileMenu');
    const menuToggleBtn = document.querySelector('[data-menu-toggle]');

    if (menuToggleBtn && menu) {
        menuToggleBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    document.querySelectorAll('[data-menu-close]').forEach((link) => {
        link.addEventListener('click', () => {
            if (menu && !menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
            }
        });
    });

    document.querySelectorAll('[data-faq-toggle]').forEach((button) => {
        const id = button.getAttribute('data-faq-toggle');
        const content = document.getElementById(`faqContent-${id}`);
        const icon = document.getElementById(`faqIcon-${id}`);

        if (!content || !icon) {
            return;
        }

        button.addEventListener('click', () => {
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
});
