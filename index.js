let video = document.getElementById('video');
let play = document.getElementById('play');
let pause = document.getElementById('pause');
let subirVolumen = document.getElementById('subirVolumen');
let bajarVolumen = document.getElementById('bajarVolumen');
let url = document.querySelector('source').getAttribute('src');

let volume = 50;

comprobacion();
// Comprueba si el src incluye ".mp4" y se ejecuta al principio
function comprobacion () {
    if (!url.includes('.mp4')) {
        alert("El fichero no es correcto");
    } 
}

// Evento para reproducir el video
play.addEventListener('click', reproducir);
function reproducir () {
    video.play();
}

// Evento para pausar el video
pause.addEventListener('click', pausa);
function pausa () {
    video.pause();
}

// Evento para subir el volumen del video
subirVolumen.addEventListener('click', subir);
function subir() {
    if(volume != 1) {
        video.volume += 0.1;
    }
}

// Evento para bajar el volumen del video
bajarVolumen.addEventListener('click', bajar);
function bajar() {
    if(volume != 0) {
        video.volume -= 0.1;
    }
}

// Funcion para indicar que el video esta cargando
video.onwaiting = function() {
    alert("El vídeo está cargando");
};