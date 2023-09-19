let input = document.querySelector("input[type=text]");
let submitButton = document.querySelector("input[type=submit]");
let root = document.querySelector(".root");

let movieArray = [];

function elm(type, attribute = {}, ...children) {
  let element = document.createElement(type);
  for (let key in attribute) {
    if (key.startsWith("data-")) {
      element.setAttribute(key, attribute[key]);
    } else {
      element[key] = attribute[key];
    }
  }
  children.forEach((child) => {
    if (typeof child === "object") {
      element.append(child);
    }
    if (typeof child === "string") {
      let node = document.createTextNode(child);
      element.append(node);
    }
  });
  return element;
}

function addMovie(event) { // Added event parameter
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
    let card = elm(
      "li",
      { id: index },
      elm("p", null, movie.name),
      elm("button", { className: "watchBtn" }, movie.watched ? "Watched" : "To Watch")
    );
    root.append(card);
  });
}

function watchToggle(event) {
  if (event.target.classList.contains("watchBtn")) {
    var index = event.target.parentElement.getAttribute("id");
    movieArray[index].watched = !movieArray[index].watched;
    event.target.innerText = movieArray[index].watched ? "Watched" : "To Watch";
    event.target.classList.toggle("watched");
  }
}

submitButton.addEventListener("click", addMovie);
input.addEventListener("keydown", addMovie);
root.addEventListener("click", watchToggle);