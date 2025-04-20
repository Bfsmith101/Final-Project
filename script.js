// script.js

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const button = document.getElementById('new-quote');

let quotes = [];

fetch('quotes.json')
  .then(response => response.json())
  .then(data => {
    quotes = data;
    showNewQuote();
  })
  .catch(err => {
    quoteText.textContent = 'Could not load quotes 🥲';
    authorText.textContent = '';
    console.error('Error:', err);
  });

function showNewQuote() {
  if (quotes.length === 0) return;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, author } = quotes[randomIndex];

  quoteText.textContent = `"${quote}"`;
  authorText.textContent = `– ${author}`;
}

button.addEventListener('click', showNewQuote);







  



  
  



