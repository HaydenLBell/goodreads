// Script to handle like and comment actions

document.addEventListener("DOMContentLoaded", function() {

    // Like button functionality
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            let likeCount = this.querySelector('.like-count');
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });

    // Comment functionality
    const commentButtons = document.querySelectorAll('.comment-btn');
    commentButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const commentSection = this.nextElementSibling;
            commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
        });
    });

    const submitButtons = document.querySelectorAll('.submit-comment');
    submitButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const commentInput = this.previousElementSibling;
            const commentList = this.nextElementSibling;
            if (commentInput.value !== '') {
                const newComment = document.createElement('p');
                newComment.textContent = commentInput.value;
                commentList.appendChild(newComment);
                commentInput.value = '';
            }
        });
    });

});
