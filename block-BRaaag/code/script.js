let input = document.querySelector("input[type=text]");
let submitButton = document.querySelector("input[type=submit]");
let root = document.querySelector(".root");
let movieArray = [];

function addMovie(event) {
  if ((event.keyCode === 13 || event.type === "click") && input.value) {
    let newMovie = {};
    newMovie.name = input.value;
    newMovie.watched = false;
    movieArray.push(newMovie);
    displayMovieList();
    input.value = "";
  }
}

function displayMovieList() {
  let UI = movieArray.map((movie, index) => {
    return <li data-id = {index} key = {index}>
                <p>{movie.name}</p>
                <button className = "watchBtn" {...movie.watched ? "watched" : ""}>
                    {movie.watched ? "Watched" : "To Watch"}
                </button>
            </li>
  });
  ReactDOM.render(UI, root);
}

function watchToggle(event) {
  if (event.target.classList.contains("watchBtn")) {
    var index = event.target.parentElement.getAttribute("data-id");
    movieArray[index].watched = !movieArray[index].watched;
    event.target.innerText = movieArray[index].watched ? "Watched" : "To Watch";
    event.target.classList.toggle("watched");
  }
}

submitButton.addEventListener("click", addMovie);
input.addEventListener("keydown", addMovie);
root.addEventListener("click", watchToggle);