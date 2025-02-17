// Script to handle like and comment actions

document.addEventListener("DOMContentLoaded", function() {

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

