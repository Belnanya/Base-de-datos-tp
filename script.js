const soundButtons = document.querySelectorAll('.sound-button');
const soundTable = document.querySelector('table');
const soundRows = soundTable.querySelectorAll('tbody tr');
const soundInfo = {};

soundRows.forEach((row) => {
    const soundName = row.cells[0].textContent;
    const soundDuration = row.cells[1].textContent;
    const soundType = row.cells[2].textContent;
    const soundAuthors = row.cells[3].textContent.split(',').map(author => author.trim());

    soundInfo[soundName] = {
        plays: 0,
        duration: soundDuration,
        type: soundType,
        authors: soundAuthors,
    };
});

// Función para reproducir un sonido
function playSound(soundFileName) {
    const audio = new Audio(`https://raw.githubusercontent.com/Belnanya/Base-de-datos-tp/main/sounds/${soundFileName}`);
    audio.play();
}

// Asignar clic a los botones para reproducir sonidos
soundButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const soundFileName = button.getAttribute('data-sound');
        playSound(soundFileName);

        // Actualizar el número de reproducciones
        const soundName = button.textContent;
        soundInfo[soundName].plays++;

        // Actualizar la tabla con el número de reproducciones
        soundRows.forEach((row) => {
            const rowSoundName = row.cells[0].textContent;
            row.cells[1].textContent = soundInfo[rowSoundName].plays;
        });
    });
});

// Función para encontrar el sonido más y menos elegido
function findMostAndLeastPlayedSounds() {
    let mostPlayedSound = '';
    let leastPlayedSound = '';

    for (const soundName in soundInfo) {
        if (!mostPlayedSound || soundInfo[soundName].plays > soundInfo[mostPlayedSound].plays) {
            mostPlayedSound = soundName;
        }
        if (!leastPlayedSound || soundInfo[soundName].plays < soundInfo[leastPlayedSound].plays) {
            leastPlayedSound = soundName;
        }
    }

    return {
        mostPlayedSound,
        leastPlayedSound,
    };
}

// Muestrar el sonido más y menos elegido
const { mostPlayedSound, leastPlayedSound } = findMostAndLeastPlayedSounds();
document.getElementById('most-played').textContent = mostPlayedSound;
document.getElementById('least-played').textContent = leastPlayedSound;
let currentAudio = null;

soundButtons.forEach((button) => {
    /*button.addEventListener('click', () => {
        // Detener la reproducción del sonido actual, si existe        if (currentAudio) {
            currentAudio.pause();
        }
        const soundFileName = button.getAttribute('data-sound');
        currentAudio = new Audio(soundFileName);
        currentAudio.play();

        // Actualizar los detalles del sonido        const soundName = button.textContent;
        document.getElementById('sound-name').textContent = soundName;
        document.getElementById('sound-duration').textContent = soundInfo[soundName].duration;
        document.getElementById('sound-type').textContent = soundInfo[soundName].type;
        document.getElementById('sound-authors').textContent = soundInfo[soundName].authors.join(', ');
        document.getElementById('sound-url').textContent = soundInfo[soundName].url;
        document.getElementById('sound-url').href = soundInfo[soundName].url;
    });*/
});