// Countdown Timer Functionality
function updateCountdown() {
    const days = document.querySelector('.countdown-box:nth-child(1) .countdown-number');
    const hours = document.querySelector('.countdown-box:nth-child(2) .countdown-number');
    const minutes = document.querySelector('.countdown-box:nth-child(3) .countdown-number');

    let daysValue = parseInt(days.textContent);
    let hoursValue = parseInt(hours.textContent);
    let minutesValue = parseInt(minutes.textContent);

    // Update countdown every minute
    setInterval(() => {
        minutesValue--;

        if (minutesValue < 0) {
            minutesValue = 59;
            hoursValue--;

            if (hoursValue < 0) {
                hoursValue = 23;
                daysValue--;

                if (daysValue < 0) {
                    // Reset countdown when it reaches zero
                    daysValue = 6;
                    hoursValue = 18;
                    minutesValue = 48;
                }
            }
        }

        // Update display
        days.textContent = daysValue.toString().padStart(2, '0');
        hours.textContent = hoursValue.toString().padStart(2, '0');
        minutes.textContent = minutesValue.toString().padStart(2, '0');
    }, 60000); // Update every minute
}

// Initialize countdown
updateCountdown();

// Tab Functionality
const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // You would typically load different products here based on the selected tab
        // For this demo, we'll just show an alert
        alert(`${tab.textContent} category selected!`);
    });
});

// Navigation Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
});

// Back Button Functionality
const backButton = document.querySelector('.back-button');

backButton.addEventListener('click', () => {
    // In a real app, this would navigate back
    // For this demo, we'll just show an alert
    alert('Going back to previous page!');
});

// See More Button Functionality
const seeMoreBtn = document.querySelector('.see-more-btn');

seeMoreBtn.addEventListener('click', () => {
    // In a real app, this would load more products
    // For this demo, we'll just show an alert
    alert('Loading more products!');
});

// Shop Now Button Functionality
const shopNowBtn = document.querySelector('.shop-now-btn');

shopNowBtn.addEventListener('click', () => {
    // In a real app, this would navigate to the shop
    // For this demo, we'll just show an alert
    alert('Redirecting to exclusive offers!');
});

// Product Card Click Functionality
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', () => {
        // In a real app, this would navigate to the product detail page
        // For this demo, we'll just show an alert
        const productName = card.querySelector('.product-name').textContent;
        alert(`Viewing details for ${productName}`);
    });

    // Add hover effect
    card.style.cursor = 'pointer';
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
