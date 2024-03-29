// Sample hotel data with local image URLs
const hotels = [
    {
        name: "Luxury Hotel",
        image: "images/hotel1.jpg", // assuming the images folder is in the same directory as the HTML file
        price: "$200 per night",
        stars: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Comfort Inn",
        image: "images/hotel2.jpg",
        price: "$150 per night",
        stars: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Seaside Resort",
        image: "images/hotel3.jpg",
        price: "$180 per night",
        stars: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Bakuriani Inn",
        image: "images/hotel4.jpg",
        price: "$300 per night",
        stars: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Kazbegi Rooms",
        image: "images/hotel5.jpg",
        price: "$280 per night",
        stars: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Lopota Lake Resorts",
        image: "images/hotel6.jpg",
        price: "$210 per night",
        stars: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
];

// Function to create a card for each hotel
function createHotelCard(hotel) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = hotel.image;
    image.alt = hotel.name;

    const name = document.createElement("h2");
    name.textContent = hotel.name;

    const price = document.createElement("p");
    price.textContent = `Price: ${hotel.price}`;

    const starRating = document.createElement("div");
    starRating.classList.add("star-rating");

    // Display stars dynamically for each hotel
    for (let i = 0; i < 5; i++) {
        const star = document.createElement("span");
        star.textContent = i < hotel.stars ? "★" : "☆"; // Display filled star or empty star
        starRating.appendChild(star);
    }

    card.addEventListener("click", () => openHotelDetailsPage(hotel));

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(starRating);

    return card;
}

// Populate the container with hotel cards using forEach
const hotelContainer = document.getElementById("hotel-container");

hotels.forEach(hotel => {
    const card = createHotelCard(hotel);
    hotelContainer.appendChild(card);
});

function openHotelDetailsPage(hotel) {
    // Navigate to a new page with hotel details
    // window.location.href = `hotel-details.html?name=${hotel.name}&image=${hotel.image}&price=${hotel.price}`;
    localStorage.setItem("hotelData", JSON.stringify(hotel))
    window.location.href = "details.html"
}

// Banner code

// Sort hotels by stars in descending order
const sortedHotels = hotels.sort((a, b) => b.stars - a.stars);

// Display hotel cards in the banner
const bannerContainer = document.getElementById("banner-container");

sortedHotels.slice(0, 3).forEach(hotel => {
    const card = document.createElement("div");
    card.className = "banner-card";
    card.innerHTML = `<h2>${hotel.name}</h2><p>${hotel.stars} stars</p><img class="banner-image" src="${hotel.image}" alt="${hotel.name}">`;
    card.addEventListener("click", () => openHotelDetailsPage(hotel));
    bannerContainer.appendChild(card);
});