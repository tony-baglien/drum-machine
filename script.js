const altKickPad = document.getElementById('pad-1');
const kickPad = document.getElementById('pad-4');

const altSnarePad = document.getElementById('pad-2');
const snarePad = document.getElementById('pad-5');

const highHatPad = document.getElementById('pad-3');
const altHighHatPad = document.getElementById('pad-6');

const kickAudio = new Audio('Sounds/DrumBruteSamples/Kicks/Kik1.wav');
const altKickAudio = new Audio('Sounds/DrumBruteSamples/Kicks/Kik-OD1.wav');

const snareAudio = new Audio('Sounds/DrumBruteSamples/MainSnare/Snare1.wav');
const altSnareAudio = new Audio('Sounds/DrumBruteSamples/AltSnare1/AltSD10.wav');

const highHatAudio = new Audio('Sounds/DrumBruteSamples/ClosedHats/Hats1.wav');
const altHighHatAudio = new Audio('Sounds/DrumBruteSamples/ClosedHats_ALT/HH1.wav')



kickPad.addEventListener('mousedown', () => {
    kickAudio.play();
})
altKickPad.addEventListener('mousedown', () => {
    altKickAudio.play();
})
snarePad.addEventListener('mousedown', () => {
    snareAudio.play();
})
altSnarePad.addEventListener('mousedown', () => {
    altSnareAudio.play();
})
highHatPad.addEventListener('mousedown', () => {
    highHatAudio.play()
})
altHighHatPad.addEventListener('mousedown', () => {
    altHighHatAudio.play()
})

soundKey('q',altKickAudio,altKickPad);
soundKey('a',kickAudio,kickPad);
soundKey('w',altSnareAudio,altSnarePad);
soundKey('s',snareAudio,snarePad);
soundKey('d',highHatAudio,highHatPad);
soundKey('e',altHighHatAudio,altHighHatPad);


function soundKey(key,audio,button) {
    document.addEventListener('keypress', e => {
        if (e.key == key) {
            button.click()
            audio.play();
            setTimeout(() => {
                audio.pause();
                audio.currentTime = 0
            },500)
        }
    })
}