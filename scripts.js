const soundButtons = document.querySelectorAll('.sound-button');
const soundInfoTable = document.getElementById('sound-info');

const soundData = [
    {
        name: 'BEYONCE!!',
        duration: '00:05',
        type: 'Efecto de Sonido',
        authors: 'Autor 1, Autor 2',
        playCount: 0,
        soundFile: 'ShootBeyonce.mp3',
    },
    {
        name: 'Sonido 2',
        duration: '00:03',
        type: 'Canción',
        authors: 'Autor 3',
        playCount: 0,
        soundFile: 'sound2.mp3',
    },
    {
        name: 'Sonido 3',
        duration: '00:01',
        type: 'Grabación',
        authors: 'Autor 4',
        playCount: 0,
        soundFile: 'sound3.mp3',
    },
    {
        name: 'Sonido 4',
        duration: '00:02',
        type: 'Efecto de Sonido',
        authors: 'Autor 5',
        playCount: 0,
        soundFile: 'sound4.mp3',
    },
    {
        name: 'Sonido 5',
        duration: '00:03',
        type: 'Canción',
        authors: 'Autor 6',
        playCount: 0,
        soundFile: 'sound5.mp3',
    },  
];

soundButtons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        const selectedSound = soundData.find(sound => sound.soundFile === soundFile);

        if (selectedSound) {
            selectedSound.playCount++;
            updateSoundInfoTable();
            playSound(selectedSound.soundFile);
        }
    });
});

function updateSoundInfoTable() {
    soundInfoTable.innerHTML = `
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Duración</th>
                <th>Tipo</th>
                <th>Autores</th>
                <th>Reproducciones</th>
            </tr>
        </thead>
        <tbody>
            ${soundData.map(sound => `
                <tr>
                    <td>${sound.name}</td>
                    <td>${sound.duration}</td>
                    <td>${sound.type}</td>
                    <td>${sound.authors}</td>
                    <td>${sound.playCount}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
}

function playSound(soundFile) {
    const audio = new Audio(`TPbasededatos/${soundFile}`);
    audio.play();
}