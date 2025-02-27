// for saving the movie in local storage.
function saveMovie(movie) {
    let movies = JSON.parse(localStorage.getItem("movies")) || [];
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
}

// for getting the movie from local storage.
function loadMovies() {
    return JSON.parse(localStorage.getItem("movies")) || [];
}

// for showing all  movies in local storage.
function displayMovies() {
    const movies = loadMovies();
    const tableBody = document.querySelector("#movieTable tbody");
    const noMoviesMessage = document.getElementById("noMoviesMessage");

    if (!tableBody || !noMoviesMessage) return;

    if (movies.length === 0) {
        noMoviesMessage.style.display = "block";
        tableBody.innerHTML = "";
        return;
    }

    noMoviesMessage.style.display = "none";
    tableBody.innerHTML = movies.map(movie => `
      <tr>
        <td>${movie.name}</td>
        <td>${movie.description.substring(0, 100)}...</td>
        <td>${movie.year}</td>
        <td>${movie.rating}</td>
        <td>${movie.genre}</td>
        <td><img src="${movie.poster || 'default-poster.jpg'}" alt="${movie.name} Poster" width="50"></td>
        <td><button onclick="deleteMovie('${encodeURIComponent(movie.name)}')">Delete</button></td>
      </tr>
    `).join("");
}


function deleteMovie(movieName) {
    let movies = loadMovies();
    movies = movies.filter(movie => movie.name !== decodeURIComponent(movieName));
    localStorage.setItem("movies", JSON.stringify(movies));
    displayMovies();
}

// function searchMovies() {
//     const searchTerm = document.getElementById("searchBar")?.value.toLowerCase();
//     if (searchTerm === undefined) return;

//     const movies = loadMovies();
//     const filteredMovies = movies.filter(movie =>
//         movie.name.toLowerCase().includes(searchTerm) ||
//         movie.genre.toLowerCase().includes(searchTerm)
//     );

//     displayFilteredMovies(filteredMovies);
// }

// Display filtered movies
// function displayFilteredMovies(filteredMovies) {
//     const tableBody = document.querySelector("#movieTable tbody");
//     const noMoviesMessage = document.getElementById("noMoviesMessage");

//     if (!tableBody || !noMoviesMessage) return;

//     if (filteredMovies.length === 0) {
//         noMoviesMessage.style.display = "block";
//         tableBody.innerHTML = "";
//         return;
//     }

//     noMoviesMessage.style.display = "none";
//     tableBody.innerHTML = filteredMovies.map(movie => `
//       <tr>
//         <td>${movie.name}</td>
//         <td>${movie.description.substring(0, 100)}...</td>
//         <td>${movie.year}</td>
//         <td>${movie.rating}</td>
//         <td>${movie.genre}</td>
//         <td><img src="${movie.poster || 'default-poster.jpg'}" alt="${movie.name} Poster" width="50"></td>
//         <td><button onclick="deleteMovie('${encodeURIComponent(movie.name)}')">Delete</button></td>
//       </tr>
//     `).join("");
// }



document.addEventListener("DOMContentLoaded", () => {
    const movieForm = document.getElementById("movieForm");
    // const searchBar = document.getElementById("searchBar");
    const notification = document.getElementById("notification");

    if (movieForm) {
        movieForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const movie = {
                name: document.getElementById("movieName").value.trim(),
                description: document.getElementById("movieDescription").value.trim(),
                year: document.getElementById("releaseYear").value.trim(),
                rating: document.getElementById("imdbRating").value.trim(),
                genre: document.getElementById("genre").value.trim(),
                poster: document.getElementById("posterUrl").value.trim(),
            };

            console.log(movie);

            if (!movie.name || !movie.year || !movie.rating || !movie.genre) {
                alert("Please fill in all required fields.");
                return;
            }

            saveMovie(movie);
            notification.innerText = "Movie added successfully!";
            setTimeout(() => (notification.innerText = ""), 3000);
            movieForm.reset();
            displayMovies();
        });
    }

    // if (searchBar) {
    //     searchBar.addEventListener("input", searchMovies);
    // }

    displayMovies();
});
