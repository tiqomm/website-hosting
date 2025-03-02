const expandBtns = document.querySelectorAll('.expand-btn');

expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === 'none' ? 'inline' : 'none';
        btn.firstChild.classList.toggle('fa-chevron-down');
        btn.firstChild.classList.toggle('fa-chevron-up');
    });
});