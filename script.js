document.addEventListener('DOMContentLoaded', () => {
    // Год в футере
    document.getElementById('year').textContent = new Date().getFullYear();

    // Кнопка "Посчитать 1..10"
    const btn = document.getElementById('calc-btn');
    const result = document.getElementById('result');

    btn.addEventListener('click', () => {
        const sum = Array.from({ length: 10 }, (_, i) => i + 1)
            .reduce((acc, n) => acc + n, 0);

        result.textContent = `Сумма 1..10 = ${sum}`;
        result.style.color = sum === 55 ? '#28a745' : '#d73a49';
    });
});
