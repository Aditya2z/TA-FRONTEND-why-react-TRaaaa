let input = document.querySelector("input[type=text]");
let submitButton = document.querySelector("input[type=submit]");
let root = document.querySelector(".root");

let movieArray = [];

function addMovie() {
    if ((event.keyCode === 13 || event.type === "click") && input.value) {
        let newMovie = {};
        newMovie.id = Date.now();
        newMovie.name = input.value;
        newMovie.watched = false;
        movieArray.push(newMovie);
        displayMovieList();
        input.value = "";
    }
}

function displayMovieList() {
    root.innerHTML = "";
    movieArray.forEach((movie, index) => {
        let card = document.createElement("li");
        card.setAttribute("id", index);
        let movieName = document.createElement("p");
        movieName.innerText = movie.name;
        let watchedButton = document.createElement("button");
        watchedButton.classList.add("watchBtn");
        if(movie.watched) {
            watchedButton.classList.add("watched");
        }
        watchedButton.addEventListener("click", watchToggle(movie.id));
        card.append(movieName);
        card.append(watchedButton);
        root.append(card);
    })
}

function watchToggle(id) {
    if(event.target.classList.value.includes("watchBtn")) {
        var index = event.target.parentElement.getAttribute("id");
        movieArray[index].watched = !movieArray[index].watched;
        event.target.classList.toggle("watched");
    };
}

submitButton.addEventListener("click", addMovie);
input.addEventListener("keydown", addMovie);
root.addEventListener("click", watchToggle);