document.addEventListener("DOMContentLoaded", function () {
    const genres = [
        "Fiction", "Mystery", "Science Fiction", "Fantasy",
        "Historical", "Thriller", "Horror", "Romance",
        "Biography", "Self-Help", "Philosophy", "Poetry",
        "Graphic Novels", "Adventure", "Dystopian", "Crime",
        "Memoir", "Young Adult", "Children’s", "Classic",
        "Humor", "Science", "Religion", "Psychology",
        "Business", "Cooking", "Travel", "Art", "Music",
        "Sports", "Health", "Education", "Technology",
        "Spirituality", "Politics", "Economics", "Nature",
        "Mythology", "War", "Western", "Anthology",
        "Short Stories", "Magical Realism", "True Crime",
        "Fairy Tales", "Feminism", "LGBTQ+", "Urban Fiction"
    ];

    const genreContainer = document.getElementById("genreContainer");
    const searchBar = document.getElementById("searchBar");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    let itemsPerLoad = 200;
    let displayedItems = 12;

    function displayGenres() {
        genreContainer.innerHTML = "";
        genres.slice(0, displayedItems).forEach(genre => {
            const div = document.createElement("div");
            div.classList.add("genre");
            div.textContent = genre;
            genreContainer.appendChild(div);
        });

        if (displayedItems >= genres.length) {
            loadMoreBtn.style.display = "none";
        } else {
            loadMoreBtn.style.display = "block";
        }
    }

    searchBar.addEventListener("input", function () {
        const filter = searchBar.value.toLowerCase();
        const genreDivs = document.querySelectorAll(".genre");

        genreDivs.forEach(div => {
            if (div.textContent.toLowerCase().includes(filter)) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        });
    });

    loadMoreBtn.addEventListener("click", function () {
        displayedItems += itemsPerLoad;
        displayGenres();
    });

    displayGenres();
});
