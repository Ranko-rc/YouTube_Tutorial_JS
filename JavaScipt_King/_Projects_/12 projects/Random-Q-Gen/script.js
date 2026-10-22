const btnEl = document.querySelector('.generate-btn');
const quoteEl = document.getElementById('quote');
const authorEl = document.getElementById('author');

const API_URL = 'https://api.quotable.io/random';

async function getQuote() {
try {
    btnEl.innerText = 'Loading...';
    btnEl.disabled = true;
    quoteEl.textContent = 'Updating...';
    authorEl.textContent = 'Updating...';

    const response = await fetch(API_URL);
    const data = await response.json();
    
    const quoteContent = data.content;
    const authorContent = data.author;
    
    quoteEl.textContent = quoteContent;
    authorEl.textContent = authorContent;
    // console.log(data);
} catch (error) {
        console.error('Error fetching quote:', error);
        quoteEl.textContent = 'Failed to fetch quote.';
        authorEl.textContent = 'Failed to fetch author.';
} finally {
    btnEl.innerText = 'Generate Quote';
    btnEl.disabled = false;
}
}

btnEl.addEventListener('click', getQuote);  


