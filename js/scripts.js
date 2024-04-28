/*!
 * Start Bootstrap - Blog Post v5.0.9 (https://startbootstrap.com/template/blog-post)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Array to track whether additional content has been shown for each card
var isContentShown = [false, false, false, false, false, false];

// Function to toggle additional content for a given card
function showMoreContent(event, cardIndex) {
    event.preventDefault(); // Prevent default behavior like link following or page refresh

    // Ensure the cardIndex is within a valid range
    if (cardIndex < 1 || cardIndex > 6) {
        console.error("Invalid card index"); // Log error for troubleshooting
        return;
    }

    // Get the card element based on the index
    var cardText = document.querySelector(`#card-text-${cardIndex}`);

    // Check if the card element exists
    if (!cardText) {
        console.error("Card text not found"); // Log error if card text is missing
        return;
    }

    // Only add content if it hasn't been shown yet
    if (!isContentShown[cardIndex - 1]) {
        switch (cardIndex) {
            case 1:
                cardText.innerHTML += " Working out for 21 days provides numerous health benefits, like improved fitness, mental clarity, and stress reduction. Challenges include finding motivation and maintaining consistency. Here's how to overcome them.";
                break;
            case 2:
                cardText.innerHTML += " Walking 10,000 steps daily can boost heart health, aid weight loss, and improve overall energy levels. Challenges may include fitting walks into a busy schedule and weather-related disruptions. Discover strategies to maintain this habit.";
                break;
            case 3:
                cardText.innerHTML += " Meditating for 21 days offers benefits like reduced stress, improved focus, and enhanced emotional well-being. Common challenges include maintaining a consistent practice and avoiding distractions. Learn tips for a successful meditation journey.";
                break;
            case 4:
                cardText.innerHTML += " Journaling can help organize thoughts, increase self-awareness, and foster personal growth. Keeping a daily journal for 21 days might be challenging due to time constraints, but the rewards are worth it. Find out how to maintain a journaling habit.";
                break;
            case 5:
                cardText.innerHTML += " Here's a curated list of book and podcast recommendations for your self-development journey. Explore these resources for insights into personal growth and mindset improvement.";
                break;
            case 6:
                cardText.innerHTML += " Explore additional podcasts and YouTube recommendations focusing on self-development. These resources offer guidance, inspiration, and practical advice to support your personal growth journey.";
                break;
            default:
                return; // Invalid card index
        }

        // Mark the content for this card as shown
        isContentShown[cardIndex - 1] = true;
    }
}
