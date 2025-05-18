document.getElementById('playGame6').addEventListener('click', function () {

    const sectionPlay = document.querySelector('.mini-games');

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function changeBackgroundColor() {
        console.log("Кнопка нажата, меняем фон...");
        const randomColor = getRandomColor();
        sectionPlay.style.backgroundColor = randomColor;
        console.log("Фон изменён на:", randomColor);
    }

    changeBackgroundColor();
})