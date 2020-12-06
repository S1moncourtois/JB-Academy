document.addEventListener("keydown", function(event) {
    switch (event.code) {
        case 'KeyA':
        case 'KeyS':
        case 'KeyD':
        case 'KeyF':
        case 'KeyG':
        case 'KeyH':
        case 'KeyJ':
        case 'KeyW':
        case 'KeyE':
        case 'KeyT':
        case 'KeyY':
        case 'KeyU':
            let audio = new Audio("music/" + event.code.charAt(3) + ".mp3");
            audio.play()
            console.log(`The '${event.key}' key is pressed`);
            break;
        default:
            console.log(`Invalid '${event.key}' key pressed`);
            break;
    }
});