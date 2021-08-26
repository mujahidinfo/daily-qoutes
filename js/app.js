const loadQoutes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQoute(data));
};

const displayQoute = (quote) => {
  const showQuote = document.getElementById("quote");
  showQuote.innerText = `"${quote.quote}"`;
};
