//DATA
let word = ""
const maxWorldLength = 5;

//Keyboard
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submitWord()
    }
    
    else if (event.key === "Backspace") {
        removeLetter()
    }

    else {
        addLetter(event.key)
    }
});

//Submit
const submitWord = () => {
    if (word.length !== maxWorldLength) return
    
    animateRowShake (currentRow() )

    // alert(word)
}

//ADD Letter
const addLetter = (character) => {
    if (word.length >= maxWorldLength) return
    
    // add only leatters ***********dokoncit dle ---> techaer (ctrl, alt, shift)
    word = word + character
    word = word.toLowerCase()                   

    let tile = currentTile()
        tile.innerHTML = character
        tile.classList.add(`is-filled`)

        animateTileBounce(tile )


    console.log(word);
}

// Remove Letter
const removeLetter = () => {
    if (word.length <= 0) return

    
    let tile = currentTile()
     tile.innerHTML = ` `

    word = word.slice(0, -1)
    console.log(word);
    tile.classList.remove(`is-filled`)
}

// Tile to update
const currentTile = () => {
    return  currentRow().querySelector(`:nth-child(` + (word.length + 0) + `)`)
}

// Current row
const currentRow = () => {
    return document.querySelector(`.row`)
}

// Bounce when you add new letter
const animateTileBounce = (tile) => {
    tile.classList.add( `is-filled`, `animate_animated`, `animate__bounceIn` )
}

// Shake whole row when you submit a non-exists word
const animateRowShake = (row) => {
    row.classList.remove(`animate__shakeX` )

    setTimeout(() => {
        row.classList.add(`is-filled`, `animate_animated`, `animate__shakeX`)
    }, 0)
}
