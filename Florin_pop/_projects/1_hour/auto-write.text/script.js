const text = "Můj text který se automaticky dopisuje ...";   

let index = 0;


function autoWrite() {
    if (index < text.length) {
        document.body.textContent += text.slice(index, index + 1);
        index++;

       if (index > text.length - 1) {
        index = 0;
        
        document.body.textContent = "";


        //    clearInterval(intervalId);
       }
    }
}

var intervalId = setInterval(autoWrite, 100);

autoWrite();

