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
    if(movie.watched) {
      watched = "watched";
    } else {
      watched = "";
    }
    let card = React.createElement(
      "li",
      { "key": index, "data-id" : index },
      React.createElement("p", null, movie.name),
      React.createElement("button", { className: `watchBtn ${watched}`}, movie.watched ? "Watched" : "To Watch")
    );
    return card;
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