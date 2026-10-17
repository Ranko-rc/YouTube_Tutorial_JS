const sounds = [applause, boo, laugh, sad, success, wrong];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.textContent = sound.id;
    btn.addEventListener('click', () => {
        sound.play();
    });

    document.body.appendChild(btn);
});


// function stopAllSounds() {
//     sounds.forEach(sound => {
//         const song = document.getElementById(sound.id);
//         song.pause();
//         song.currentTime = 0;
//     });
// }