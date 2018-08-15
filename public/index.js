window.speech = window.SpeechRecognition || window.webkitSpeechRecognition;
// spee
// var speech = SpeechRecognition
const recognition = new speech();

const icon = document.querySelector('i.fa.fa-microphone');
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');

container.appendChild(paragraph);

const sound = document.querySelector('.sound');

icon.addEventListener('click', ()=> {
    sound.play();
    dictate();
});

const dictate = ()=>{
    recognition.start();
    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        paragraph.textContent = speechToText;
    }
}

window.speech = window.SpeechRecognition || window.webkitSpeechRecognition;
// spee
// var speech = SpeechRecognition
const recognition = new speech();

const icon = document.querySelector('i.fa.fa-microphone');
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');

container.appendChild(paragraph);

const sound = document.querySelector('.sound');

icon.addEventListener('click', ()=> {
    sound.play();
    dictate();
});

const dictate = ()=>{
    recognition.start();
    recognition.onresult = (event) => {
        const speechToText = event.results[0][0].transcript;
        paragraph.textContent = speechToText;
    }
}

