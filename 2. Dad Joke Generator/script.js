const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "5R/FPyiQhJuOuXMXu43bzA==G8OR7adj6l7Xrw1O";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  jokeEl.innerText = "updating...";
  btnEl.disabled = true;
  btnEl.innerText = "Loading...";

  const response = await fetch(apiUrl, options);
  const data = await response.json();

  btnEl.disabled = false;
  btnEl.innerText = "Tell me a joke";

  console.log(data[0].joke);
  jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke);
