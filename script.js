const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    window.location.href = 'new-page.html'; // Chuyển đến trang mới
});
