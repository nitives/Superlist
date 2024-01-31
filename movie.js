    // Function to handle search input changes
    function handleSearchInput(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        fetchMovieResults();
    }
}

async function fetchMovieResults() {
    const searchQuery = document.getElementById('movieInput').value;

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fb1361773a0d4c379f5f41009141c2f1&query=${searchQuery}`);
        const data = await response.json();

        if (data.results.length > 0) {
            const movieId = data.results[0].id;
            displayResults(movieId);
        } else {
            alert('Movie not found!');
        }
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

function displayResults(movieId) {
    const iframe = document.getElementById('movieIframe');
    iframe.src = `https://vidsrc.to/embed/movie/${movieId}`;
}