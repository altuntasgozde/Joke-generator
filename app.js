jokeBtn = document.getElementById("jokeBtn");
joke = document.getElementById("joke");

jokeBtn.addEventListener("click", getJoke);

function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.chucknorris.io/jokes/random");
    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            joke.innerHTML = response.value;
        }
    }
    xhr.send();
}
