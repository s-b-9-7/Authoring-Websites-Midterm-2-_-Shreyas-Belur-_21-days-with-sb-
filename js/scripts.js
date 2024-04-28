/*!
 * Start Bootstrap - Blog Post v5.0.9 (https://startbootstrap.com/template/blog-post)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Flags indicating whether additional content has been shown for each card
var isContentShown = [false, false, false, false, false, false];

// Function to toggle extra content for a given card
function showMoreContent(event, cardIndex) {
    event.preventDefault(); // Prevent default link behavior

    // Validate cardIndex to prevent out-of-bounds errors
    if (cardIndex < 1 || cardIndex > 6) return;

    // Get the corresponding card text element
    var cardText = document.querySelector(`#card-text-${cardIndex}`);

    // Append additional content based on the cardIndex and the flag status
    if (!isContentShown[cardIndex - 1]) {
        switch (cardIndex) {
            case 1:
                cardText.innerHTML += " Unleash change with '21 Days with Shreyas Belur.' The goal is to find out if the idea that it takes 21 days to build a habit is true, as we overcome various challenges to promote personal growth.";
                break;
            case 2:
                cardText.innerHTML += " Explore why 21 days is the number chosen for habit-building. Ancient wisdom claims 21 days can build habits; we're here to test it with challenges that encourage intentional evolution.";
                break;
            case 3:
                cardText.innerHTML += " Introducing Shreyas Belur, your quintessential average guy. He leads these challenges, showing that anyone can embark on a journey of personal development and find success.";
                break;
            case 4:
                cardText.innerHTML += " This journey blends entertainment and enlightenment, steering towards self-refinement. It is designed to be an impactful resource for those who believe in the power of small steps to achieve growth.";
                break;
            case 5:
                cardText.innerHTML += " The newsletter provides a curated list of high-quality resources and introduces up-and-coming thought leaders in the self-development space. It's a must-have for those seeking positive change.";
                break;
            case 6:
                cardText.innerHTML += " Join the newsletter to receive original articles and additional resources for your self-development journey. Discover new ways to grow and learn from experts and like-minded individuals.";
                break;
            default:
                return; // No additional content for invalid cardIndex
        }

        // Set the flag to true, indicating that the content has been expanded
        isContentShown[cardIndex - 1] = true;
    }
}
