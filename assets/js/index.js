// Check screen width and height and show the alert only once
// const screenInterval = setInterval(function () {
//     if (window.innerWidth > 700) {
//         alert("Aren't you brilliant one? Unfortunately though, I haven't designed it to open this vertically, so you'll have to rotate your phone horizontally and then click the button.");
//         clearInterval(screenInterval); // Stop further alerts
//         // location.reload();
//     }
// }, 3000);

document.addEventListener('DOMContentLoaded', function () {
    const texts = document.querySelectorAll('.highlight');

    texts.forEach((text, index) => {
        text.style.animationDelay = `${index * 1.0}s`;
        text.addEventListener('animationend', () => {
            text.classList.remove('highlighted');
        });

        text.addEventListener('webkitAnimationEnd', () => {
            text.classList.remove('highlighted');
        });

        text.addEventListener('oanimationend', () => {
            text.classList.remove('highlighted');
        });

        text.addEventListener('MSAnimationEnd', () => {
            text.classList.remove('highlighted');
        });

        setTimeout(() => {
            text.classList.add('highlighted');
        }, 5500);
    });
});

window.addEventListener('load', function () {
    setTimeout(function () {
        var audio = document.getElementById('backgroundMusic');
        audio.play();
    }, 5000); // 5000 milliseconds = 5 seconds
});
