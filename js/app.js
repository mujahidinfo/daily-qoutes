const loadQoutes = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQoute(data));
};

const displayQoute = (qoute) => {
  const showQoute = document.getElementById("qoute");
  showQoute.innerText = `"${qoute.quote}"`;
  console.log(qoute);
};
