document.addEventListener("DOMContentLoaded", function() {
    // Fix: Ensure elements exist before using them
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

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
    const searchBar = document.getElementById('searchBar');
    const loadMoreButton = document.getElementById('loadMore');

    let displayed = 12;

    function displayGenres(limit) {
        if (!genreContainer) return;
        genreContainer.innerHTML = '';
        genres.slice(0, limit).forEach(genre => {
            const div = document.createElement('div');
            div.className = 'genre';
            div.textContent = genre;
            genreContainer.appendChild(div);
        });
    }

    function filterGenres() {
        if (!searchBar || !genreContainer) return;
        const searchValue = searchBar.value.toLowerCase();
        document.querySelectorAll('.genre').forEach(genre => {
            genre.classList.toggle('hidden', !genre.textContent.toLowerCase().includes(searchValue));
        });
    }

    if (searchBar) {
        searchBar.addEventListener('input', filterGenres);
    }

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            displayed += 20;
            if (displayed >= genres.length) {
                displayed = genres.length;
                loadMoreButton.style.display = 'none';
            }
            displayGenres(displayed);
        });
    }

    displayGenres(displayed);

    // Search bar functionality for books & genres
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("keyup", function() {
            let searchQuery = this.value.toLowerCase();
            let books = document.querySelectorAll(".book-card, .genre-card");
            books.forEach(book => {
                let title = book.querySelector("h3")?.innerText.toLowerCase();
                book.style.display = title && title.includes(searchQuery) ? "block" : "none";
            });
        });
    }
});
