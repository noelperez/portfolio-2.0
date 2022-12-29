const errors = document.getElementById('errors');

errors.textContent ? errors.style.display = 'block' : errors.style.display = 'none';

errors.addEventListener('click', (e) => {
    e.target.style.display = 'none';
})