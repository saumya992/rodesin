        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.menu-item').forEach(el => {
                    el.classList.remove('active');
                });
                item.classList.add('active');
            });
        });




        document.addEventListener("DOMContentLoaded", function () {
            const sidebar = document.querySelector(".sidebar");
            const mainContent = document.querySelector(".main-content");
            const backButton = document.querySelector(".back-button");

            // Toggle sidebar visibility
            backButton.addEventListener("click", () => {
                sidebar.classList.toggle("collapsed");
                mainContent.classList.toggle("collapsed");
                backButton.classList.toggle("collapsed");
                document.querySelector(".header").classList.toggle("collapsed");
            });

            // Toggle active class for menu items
            const menuItems = document.querySelectorAll('.menu-item');
            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    // Reset all menu items to default state
                    menuItems.forEach(i => {
                        i.classList.remove('active');
                        i.querySelector('img').style.filter = 'none'; // Reset icon color
                        i.querySelector('span').style.color = '#ffffff'; // Reset text color
                    });

                    // Set the clicked item to active state
                    item.classList.add('active');
                    item.querySelector('img').style.filter = 'brightness(0) saturate(100%) invert(66%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%)'; // Change icon color to orange
                    item.querySelector('span').style.color = '#fc8b23'; // Change text color to orange
                });
            });

            // Set the default state for the Dashboard item
            const dashboardItem = document.querySelector('.menu-item.active');
            if (dashboardItem) {
                dashboardItem.querySelector('img').style.filter = 'brightness(0) saturate(100%) invert(66%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%)'; // Set icon color to orange
                dashboardItem.querySelector('span').style.color = '#fc8b23'; // Set text color to orange
            }

            // Other existing functionalities...

            // Toggle active class for segment tabs
            const segmentTabs = document.querySelectorAll('.segment-tab');
            segmentTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    segmentTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                });
            });

            // Dropdown functionality
            const dropdowns = document.querySelectorAll('.filter-dropdown, .categories-dropdown, .user-profile');
            dropdowns.forEach(dropdown => {
                dropdown.addEventListener('click', () => {
                    // Simulate dropdown opening
                    console.log('Dropdown clicked');
                });
            });

            // Shop now button functionality
            const shopNowBtn = document.querySelector('.shop-now-btn');
            shopNowBtn.addEventListener('click', () => {
                alert('Shopping feature coming soon!');
            });

            // Countdown timer functionality
            let days = 6;
            let hours = 18;
            let minutes = 3;

            function updateCountdown() {
                if (minutes > 0) {
                    minutes--;
                } else {
                    minutes = 59;
                    if (hours > 0) {
                        hours--;
                    } else {
                        hours = 23;
                        if (days > 0) {
                            days--;
                        }
                    }
                }

                document.querySelector('.days-box .countdown-value').textContent = days.toString().padStart(2, '0');
                document.querySelector('.hours-box .countdown-value').textContent = hours.toString().padStart(2, '0');
                document.querySelector('.mins-box .countdown-value').textContent = minutes.toString().padStart(2, '0');

                if (days === 0 && hours === 0 && minutes === 0) {
                    clearInterval(countdownInterval);
                    alert('Offer expired!');
                }
            }

            const countdownInterval = setInterval(updateCountdown, 60000);

            // Info icon tooltip
            const infoIcon = document.querySelector('.info-icon');
            infoIcon.addEventListener('mouseover', () => {
                const tooltip = document.createElement('div');
                tooltip.style.position = 'absolute';
                tooltip.style.backgroundColor = '#333';
                tooltip.style.color = '#fff';
                tooltip.style.padding = '10px';
                tooltip.style.borderRadius = '5px';
                tooltip.style.top = '-50px';
                tooltip.style.right = '0';
                tooltip.style.zIndex = '1000';
                tooltip.style.width = '200px';
                tooltip.textContent = 'Earn tokens with every purchase. Tokens can be redeemed for discounts on future purchases.';

                infoIcon.parentNode.style.position = 'relative';
                infoIcon.parentNode.appendChild(tooltip);

                infoIcon.addEventListener('mouseout', () => {
                    tooltip.remove();
                });
            });
        });

