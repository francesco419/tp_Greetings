const quotes = [
    {
        quote:"what the f1",
        author:"Lee1"
    },
    {
        quote:"what the f2",
        author:"Lee2"
    },
    {
        quote:"what the f3",
        author:"Lee3"
    },
    {
        quote:"what the f4",
        author:"Lee4"
    },
    {
        quote:"what the f5",
        author:"Lee5"
    },
    {
        quote:"what the f6",
        author:"Lee6"
    },
    {
        quote:"what the f7",
        author:"Lee7"
    },
    {
        quote:"what the f8",
        author:"Lee8"
    },
    {
        quote:"what the f9",
        author:"Lee9"
    },
    {
        quote:"what the f10",
        author:"Lee10"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const sayQuote = quotes[(Math.floor(Math.random()*quotes.length))];

quote.innerText = sayQuote.quote;
author.innerText = sayQuote.author;