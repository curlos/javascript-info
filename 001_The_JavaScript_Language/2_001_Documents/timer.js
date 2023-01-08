let timer;

const startTimer = () => {
    clearInterval(timer);

    timer = setInterval(() => {
        console.log('fagg');
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        document.querySelector('.hours').textContent = String(hours).padStart(2, '0');
        document.querySelector('.minutes').textContent = String(minutes).padStart(2, '0');
        document.querySelector('.seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
};

const stopTimer = () => {
    clearInterval(timer);
};

document.querySelector('.start').addEventListener('click', () => {
    console.log('Fuck you');
    startTimer();
});
document.querySelector('.stop').addEventListener('click', () => {
    stopTimer();
});