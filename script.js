const searchForm = document.querySelector('form');
const moviecontainer = document.querySelector('.movie-container');
const inputBox = document.querySelector('.inputBox');    

// Function to get movie info
const getMovieInfo = async (movie) => {
    const MyapiKey = "66b9ae71"
    const url = `http://www.omdbapi.com/?apikey=${MyapiKey}&t=${movie}`;

    const response = await fetch(url);
    const data = await response.json();
    showMovieData(data); // Call showMovieData with the fetched data
}

// Function to show movie data
const showMovieData = (data) => {
    moviecontainer.innerHTML = '';
    moviecontainer.classList.add('noBackground');
    // Destructuring data object
    const { Title, Poster, Year, Genre, Director, Actors, Plot } = data;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-container');
    movieElement.innerHTML = `
        <div class="movie-poster">
            <img src="${Poster}" alt="${Title} Poster">
        </div>
        <div class="movie-info">
            <h2>${Title}</h2>
            <p><strong>Genre: </strong>${Genre}</p>
            <p><strong>Year: </strong>${Year}</p>
            <p><strong>Director: </strong>${Director}</p>
            <p><strong>Actors: </strong>${Actors}</p>
            <p><strong>Plot: </strong>${Plot}</p>
        </div>
    `;

    moviecontainer.appendChild(movieElement);
}

// Event listener for form submission
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const movieName = inputBox.value.trim();
    if(movieName !== '') {
        getMovieInfo(movieName);
    }
    else{
        moviecontainer.innerHTML = '<h2>Please enter a movie name</h2>';
        moviecontainer.classList.add('noBackground');
    }
});