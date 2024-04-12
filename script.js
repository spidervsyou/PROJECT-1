// Dummy data for featured events
const featuredEvents = [
    { name: "Conference Expo 2024", location: "New York", date: "April 15-17, 2024" },
    { name: "Music Festival", location: "Los Angeles", date: "May 20-22, 2024" },
    { name: "Tech Summit", location: "San Francisco", date: "June 10-12, 2024" }
];

// Function to display featured events
function displayFeaturedEvents() {
    const featuredEventsSection = document.getElementById("featured-events");
    let eventsHTML = "<ul>";
    featuredEvents.forEach(event => {
        eventsHTML += `<li>${event.name} - ${event.location} (${event.date})</li>`;
    });
    eventsHTML += "</ul>";
    featuredEventsSection.innerHTML = eventsHTML;
}

// Event listener for search button
document.getElementById("search-button").addEventListener("click", function() {
    const searchInput = document.getElementById("search-input").value;
    alert(`Searching for: ${searchInput}`);
});

// Display featured events on page load
window.onload = function() {
    displayFeaturedEvents();
};
