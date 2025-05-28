function goBack() {
    // In a real application, this would navigate back
    console.log('Going back to previous page');
    alert('Navigating back to previous page');
}

function changeView(element, imageSrc) {
    // Remove active class from all thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });

    // Add active class to clicked thumbnail
    element.classList.add('active');

    // Change main image
    document.getElementById('mainImage').src = imageSrc;
}

// Add event listener for search
document.querySelector('.search-container input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // In a real application, this would trigger a search
        }
    }
});

function openFullscreen() {
    const image = document.querySelector('.main-blueprint img');
    if (image.requestFullscreen) {
        image.requestFullscreen();
    } else if (image.webkitRequestFullscreen) {
        image.webkitRequestFullscreen();
    } else if (image.msRequestFullscreen) {
        image.msRequestFullscreen();
    }
}

// Function to change the main image when a thumbnail is clicked
function changeMainImage(src) {
    document.getElementById('mainImage').src = src;
}

// Add to cart functionality
document.getElementById('addToCartBtn').addEventListener('click', function () {
    alert('Product added to cart!');
});

// Buy now functionality
document.getElementById('buyNowBtn').addEventListener('click', function () {
    alert('Proceeding to checkout!');
});

// Back button functionality
document.querySelector('.back-button').addEventListener('click', function () {
    // In a real application, this would navigate back
    // For this demo, we'll just show an alert
    alert('Navigating back to previous page');
});

// Search functionality
document.querySelector('.search-icon').addEventListener('click', function () {
    const searchTerm = document.querySelector('.search-input').value;
    if (searchTerm) {
        alert('Searching for: ' + searchTerm);
    } else {
        alert('Please enter a search term');
    }
});

// Enter key for search
document.querySelector('.search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        if (searchTerm) {
            alert('Searching for: ' + searchTerm);
        } else {
            alert('Please enter a search term');
        }
    }
});

// Like functionality
document.querySelector('img[alt="Likes"]').addEventListener('click', function () {
    const likeText = document.querySelector('.stat span:last-child');
    let likes = parseInt(likeText.textContent);
    likes++;
    likeText.textContent = likes + ' Likes';
    alert('You liked this blueprint!');
});

// Bookmark functionality
document.querySelector('.bookmark').addEventListener('click', function () {
    alert('Blueprint saved to your bookmarks!');
});

// Share functionality
document.querySelector('img[alt="Share"]').addEventListener('click', function () {
    alert('Share options: Copy Link, Email, Twitter, Facebook, Instagram');
});
