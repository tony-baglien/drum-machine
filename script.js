const kickPad = document.getElementById('pad-1');
const snarePad = document.getElementById('pad-2');

const kickAudio = new Audio('Sounds/DrumBruteSamples/Kicks/Kik1.wav');
const snareAudio = new Audio('Sounds/DrumBruteSamples/MainSnare/Snare1.wav')

kickPad.addEventListener('mousedown', () => {
    kickAudio.play();
})
snarePad.addEventListener('mousedown', () => {
    snareAudio.play();
})

document.addEventListener('keypress', e => {
    if (e.key == 'a') {
        kickAudio.play();
        setTimeout(() => {
            kickAudio.pause();
            kickAudio.currentTime = 0
        },500)
    } else if (e.key == 's') {
        snareAudio.play();
        setTimeout(() => {
            snareAudio.pause();
            snareAudio.currentTime = 0
        },500)
    }
})
