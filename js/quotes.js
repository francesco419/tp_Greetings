const quotes = [
    {
        quote:"The road to success and the road to failure are almost exactly the same.",
        author:"- Colin R. Davis"
    },
    {
        quote:"life is not fair get used to it.",
        author:"- Bill Gates"
    },
    {
        quote:"Anyone who has never made a mistake has never tried anything new.",
        author:"- Albert Einstein"
    },
    {
        quote:"The way get started is to quit talking and begin doing.",
        author:"- Walt Disney"
    },
    {
        quote:"Action is the foundational key to all success.",
        author:"- Pablo Picasso"
    },
    {
        quote:"Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author:"- Kamal Ravikant"
    },
    {
        quote:"Life is a mountain. Your goal is to find your path, not to reach the top.",
        author:"- Maxime Lagacé"
    },
    {
        quote:"Happiness is a habit—cultivate it.",
        author:"- Elbert Hubbard"
    },
    {
        quote:" Never let the fear of striking out keep you from playing the game.",
        author:"- Babe Ruth"
    },
    {
        quote:"Being happy never goes out of style.",
        author:"- Lilly Pulitzer"
    }
];


const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote span:last-child");

function QuotesInterval(){
    const sayQuote = quotes[(Math.floor(Math.random()*quotes.length))];
    quote.innerText = sayQuote.quote;
    author.innerText = sayQuote.author;
}

QuotesInterval();

setInterval(QuotesInterval, 9999);