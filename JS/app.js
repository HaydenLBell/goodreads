// Script to handle like and comment actions

document.addEventListener("DOMContentLoaded", function() {

    const genres = [
        "Fantasy", "Science Fiction", "Mystery", "Thriller",
        "Romance", "Historical Fiction", "Horror", "Self-Help",
        "Biography", "Graphic Novel", "Young Adult", "Children's",
        "Adventure", "Dystopian", "Classic", "Crime",
        "Poetry", "Western", "Magical Realism", "Memoir",
        "Philosophy", "Psychology", "Humor", "Science",
        "Spirituality", "Travel", "Cooking", "Art",
        "Music", "Education", "Sports", "Business", "Joke"
    ];

    const genreContainer = document.getElementById('genreContainer');
    const searchBar = document.getElementById('search-input');
    const loadMoreButton = document.getElementById('loadMore');
    let displayed = 12;

    function displayGenres(limit) {
        genreContainer.innerHTML = '';
        genres.slice(0, limit).forEach(genre => {
            const div = document.createElement('div');
            div.className = 'genre';
            div.textContent = genre;
            genreContainer.appendChild(div);
        });
    }

    function filterGenres() {
        const searchValue = searchBar.value.toLowerCase();
        document.querySelectorAll('.genre').forEach(genre => {
            if (genre.textContent.toLowerCase().includes(searchValue)) {
                genre.classList.remove('hidden');
            } else {
                genre.classList.add('hidden');
            }
        });
    }

    searchBar.addEventListener('input', filterGenres);

    loadMoreButton.addEventListener('click', () => {
        displayed += 20;
        if (displayed >= genres.length) {
            displayed = genres.length;
            loadMoreButton.style.display = 'none';
        }
        displayGenres(displayed);
    });

    displayGenres(displayed);

    // Search bar functionality
    document.getElementById("search-input").addEventListener("keyup", function() {
        let searchQuery = this.value.toLowerCase();
        let books = document.querySelectorAll(".book-card, .genre-card");
        books.forEach(book => {
            let title = book.querySelector("h3").innerText.toLowerCase();
            book.style.display = title.includes(searchQuery) ? "block" : "none";
        });
    });

    // Star rating system
    document.querySelectorAll(".rating span").forEach(star => {
        star.addEventListener("click", function() {
            let parent = this.parentElement;
            let allStars = parent.querySelectorAll("span");
            allStars.forEach(s => s.classList.remove("active"));
            this.classList.add("active");
            let index = Array.from(allStars).indexOf(this);
            for (let i = 0; i <= index; i++) {
                allStars[i].classList.add("active");
            }
        });
    });

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

});

