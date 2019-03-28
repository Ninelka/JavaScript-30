const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const allHands = document.querySelectorAll('.hand');


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360 ) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 60) * 360 ) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    if(secondsDegrees === 90) {
        allHands.forEach(hand => hand.style.transition = 'none')
    } else {
        allHands.forEach(hand => hand.style.transition = '')      // Используя '' удаляем инлайновый стиль
    }
}

setInterval(setDate, 1000);