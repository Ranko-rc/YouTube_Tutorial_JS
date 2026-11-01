const btnEl = document.getElementById("btn");
const appAreaEl = document.getElementById("app-area");



getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    appAreaEl.insertBefore(noteEl, btnEl);
});


// 6.Vytvorena funkce pro ziskani note
    function getNotes() {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        return notes;
    }       

// 5. Vytvorena funkce pro ulozeni note
    function saveNotes(notes) {  
        localStorage.setItem("notes", JSON.stringify(notes));     
        }


// 4. Vytvořena funkce pro aktualizaci note
    function updateNote(id, content) {
        const notes = getNotes();
        const targetNote = notes.find((note) => String(note.id) === String(id));
        if (!targetNote) return;
        targetNote.content = content;
        saveNotes(notes);
    }
       

// 3. Vytvorena funkce pro smazani note
    function deleteNote(id, element) {
        const notes = getNotes();
        const newNotes = notes.filter((note) => String(note.id) !== String(id));
        saveNotes(newNotes);
        element.remove();
    }


// 2. Vytvorena funkce pro vytvoreni elementu note
    function createNoteEl(id, content) {    
        const element = document.createElement("textarea");
        element.classList.add("note");
        element.placeholder = "Write your note here...";
        element.id = id;
        element.value = content;

        element.addEventListener("dblclick", () => {
            const warning = confirm("Are you sure you want to delete this note?");
            if (warning) {
                deleteNote(element.id, element);
            }   
        });     


        element.addEventListener("input", () => {
            updateNote(element.id, element.value);
        });

        return element;
    }


// 1.vytvorena funkce pro pridani note
    function addNote() {
        const notes = getNotes();
        const noteObj = {   
            id: Math.floor(Math.random() * 100000),
            content: "",
        };


    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appAreaEl.insertBefore(noteEl, btnEl);

    notes.push(noteObj);

    saveNotes(notes);
}


btnEl.addEventListener("click", addNote);