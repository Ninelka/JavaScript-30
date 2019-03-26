function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //Останавливает воспроизведение
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function playSample(sampleName) {
    const click = document.getElementById(sampleName);
    click.classList.add('clicked');
    click.currentTime = 0;
    click.play();
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);