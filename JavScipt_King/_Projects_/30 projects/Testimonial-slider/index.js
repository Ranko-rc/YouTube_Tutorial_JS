const testemonials = [
    {
        name : "Urijah Fabeer",
        photoUrl :"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quis vero pariatur nobis facere blanditiis laborum! Sed iste enim dicta consequuntur aspernatur adipisci vitae non cumque quam, quia alias et nam tempore dolorem exercitationem praesentium nesciunt reprehenderit error distinctio perspiciatis quas excepturi ipsa quae accusantium. Consequatur voluptatem vitae quibusdam ut saepe similique. Sunt dolore, dolorum aliquid voluptates quibusdam rerum itaque quidem, ad minima illum consequatur, impedit voluptatibus quisquam in inventore."
    },

     {
        name : "Barbara Jolie",
        photoUrl :"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        text: "Kočka Ipsum, Lorem poko loakcj ktjmnfhj jhbdvv jdhjmddbchj jdifjsidfjdjvidsjv jcxi jsfifjsgvsijvdsvj jjjkj ipsum dolor sit amet consectetur adipisicing elit. Eum quis vero pariatur nobis facere blanditiis laborum! Sed iste enim dicta consequuntur aspernatur adipisci vitae non cumque quam, quia alias et nam tempore dolorem exercitationem praesentium nesciunt reprehenderit error distinctio perspiciatis quas excepturi ipsa quae accusantium. Consequatur voluptatem vitae quibusdam ut saepe similique. Sunt dolore, dolorum aliquid voluptates quibusdam rerum itaque quidem, ad minima illum consequatur, impedit voluptatibus quisquam in inventore."
    }
]

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")


let index = 0;
// 2. -->
updateTestemonial()

// 1. -->
function updateTestemonial(){
    const {name, photoUrl, text} = testemonials [index];   // - vezme aktuální objekt z pole testemonials na pozici index, -- pomocí destrukturalizace vybere tři hodnoty: name, photoUrl a text
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;

// - posune index na další testimonial
    index++

// - pokud dojde na konec pole, vrátí se zpět na začátek, tím vzniká nekonečný cyklus testimonialů
    if (index === testemonials.length) {
    index = 0;
}

// - po 2 sekundách se funkce zavolá znovu, to způsobí automatickou změnu testimonialu každé 2 sekundy
    setTimeout(()=> {
        updateTestemonial()

    }, 2000)
}

/**
 * Shrnutí
Funkce:

zobrazuje aktuální testimonial
posunuje se na další
když dojde na konec pole, vrátí se na začátek
spouští sama sebe každé 2 sekundy, takže reference se mění automaticky
Výsledek: rotující carousel testimonialů bez uživatelského zásahu. */