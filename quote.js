// Get references to HTML elements
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const button = document.getElementById('newQuoteBtn');

// Store quotes in this array
let quotes = [];

// Fetch the quotes from the JSON file
fetch('https://mgungorchamp.github.io/mycat/quotes.json')
    .then(response => response.json())  // Convert the response to a JavaScript object
    .then(data => {
        quotes = data;  // Store quotes in the quotes array
        showRandomQuote();  // Display a random quote when the page loads
    })
    .catch(err => { 
        // If an error occurs (e.g., no internet), display an error message
        quoteText.textContent = 'Could not load quote.';
        console.error('Error fetching the quote data:', err);
    });

// Function to display a random quote
function showRandomQuote() {
    if (quotes.length === 0) {
        quoteText.textContent = 'No quotes available.';
        return;
    }

    // Pick a random index
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Get the quote object from the array
    const selectedQuote = quotes[randomIndex];

    // Update the HTML with the quote and author
    quoteText.textContent = `"${selectedQuote.quote}"`;
    quoteAuthor.textContent = `- ${selectedQuote.author}`;
}

// Add an event listener to the button to show a new quote on click
button.addEventListener('click', showRandomQuote);


// Optional: Show a new quote every 5 seconds
setInterval(showRandomQuote, 5000);