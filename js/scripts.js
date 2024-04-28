/*!
 * Start Bootstrap - Blog Post v5.0.9 (https://startbootstrap.com/template/blog-post)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-post/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Flag to track whether additional content has been shown for each card
var isContentShown = [false, false, false, false, false, false];

// Function to toggle additional content for a given card
function showMoreContent(event, cardIndex) {
    event.preventDefault(); // Prevent the default link behavior

    // Ensure the cardIndex is within the expected range
    if (cardIndex < 1 || cardIndex > 6) return;

    // Reference to the appropriate card text element
    var cardText = document.querySelector(`#card-text-${cardIndex}`);

    // Add extra content based on the card index and flag status
    if (!isContentShown[cardIndex - 1]) {
        switch (cardIndex) {
            case 1:
                cardText.innerHTML += " Working out for 21 days provides numerous health benefits, like improved fitness, mental clarity, and stress reduction. Challenges may include finding the motivation to start and maintaining consistency. Here's how to overcome them.";
                break;
            case 2:
                cardText.innerHTML += " Walking 10,000 steps daily can boost heart health, aid weight loss, and improve overall energy levels. Challenges include fitting walks into a busy schedule and weather-related disruptions. Learn strategies to maintain this habit.";
                break;
            case 3:
                cardText.innerHTML += " Meditating for 21 days offers a range of benefits, including reduced stress, improved focus, and enhanced emotional well-being. Common challenges are maintaining a consistent practice and avoiding distractions. Discover tips for a successful meditation journey.";
                break;
            case 4:
                cardText.innerHTML += " Journaling can help organize thoughts, increase self-awareness, and foster personal growth. Keeping a daily journal for 21 days might be challenging due to time constraints, but the rewards are worth it. Find out how to maintain a journaling habit.";
                break;
            case 5:
                cardText.innerHTML += " Here's a curated list of book and podcast recommendations to help with your self-development journey. Explore these resources to gain insights into personal growth and improve your mindset.";
                break;
            case 6:
                cardText.innerHTML += " Explore additional podcasts and YouTube recommendations focusing on self-development. These resources offer guidance, inspiration, and practical advice to support your personal growth journey.";
                break;
            default:
                return; // No additional content for invalid cardIndex
        }

        // Mark the content for this card as shown
        isContentShown[cardIndex - 1] = true;
    }
}
