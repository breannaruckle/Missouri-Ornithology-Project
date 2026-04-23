/*
  Bird Website JavaScript File

  This file controls all interactive features on the website.

  Features:
  - Seed cost calculator
  - Bird identifier (based on color)
  - Bird sighting form validation
  - Device information display
  - Dynamic bird card generation

  Written with beginner-friendly comments to explain both WHAT and WHY.
*/


// ==========================
// SEED COST CALCULATOR
// ==========================

// Get the calculator form from the page
let form = document.getElementById("SeedCalculator");

// Only run this code if the form exists (prevents errors on other pages)
if (form) {
    form.addEventListener("submit", runCalculator);
}

/**
 * Calculates total seed cost when form is submitted
 */
function runCalculator(event) {
    // Prevent page refresh so we can show results
    event.preventDefault();

    // Get user input and convert to numbers
    let pounds = Number(document.getElementById("seedPounds").value);
    let price = Number(document.getElementById("pricePerPound").value);

    // Multiply to get total cost
    let total = pounds * price;

    // Display result to the user
    document.getElementById("calcResult").textContent =
        "Total cost: $" + total;
}


// ==========================
// BIRD IDENTIFIER (COLOR)
// ==========================

// Get dropdown menu
let colorMenu = document.getElementById("colorChoice");

// Run function when user selects a color
if (colorMenu) {
    colorMenu.addEventListener("change", identifyBird);
}

/**
 * Matches a bird based on selected color
 */
function identifyBird() {
    let color = document.getElementById("colorChoice").value;

    let birdResult = document.getElementById("birdResult");
    let birdImage = document.getElementById("birdImage");

    // Each condition checks the selected color and displays a matching bird
    if (color === "red") {
        birdResult.textContent = "Possible Match: Northern Cardinal";
        birdImage.src = "images/northerncardinal.jpg";
        birdImage.style.display = "block";

    } else if (color === "blue") {
        birdResult.textContent = "Possible Match: Blue Jay";
        birdImage.src = "images/bluejay.jpg";
        birdImage.style.display = "block";

    } else if (color === "yellow") {
        birdResult.textContent = "Possible Match: American Goldfinch";
        birdImage.src = "images/americangoldfinch.jpg";
        birdImage.style.display = "block";

    } else if (color === "brown") {
        birdResult.textContent = "Possible Match: Carolina Wren";
        birdImage.src = "images/carolinawren.jpg";
        birdImage.style.display = "block";

    } else if (color === "black") {
        birdResult.textContent = "Possible Match: American Crow";
        birdImage.src = "images/americancrow.jpg";
        birdImage.style.display = "block";

    } else if (color === "orange") {
        birdResult.textContent = "Possible Match: Baltimore Oriole";
        birdImage.src = "images/baltimoreoriole.jpg";
        birdImage.style.display = "block";

    } else if (color === "blackwhite") {
        birdResult.textContent = "Possible Match: Downy Woodpecker";
        birdImage.src = "images/downywoodpecker.jpg";
        birdImage.style.display = "block";

    } else {
        // Reset if nothing selected
        birdResult.textContent = "Please select a color to identify a bird.";
        birdImage.src = "";
        birdImage.style.display = "none";
    }
}


// ==========================
// AUTO-FORMAT LOCATION INPUT
// ==========================

// Get the location input field from the bird sighting form
// This field is where the user types a city and state
let locationInputField = document.getElementById("location");

// Only add the event listener if the field exists on the page
// This prevents errors on pages that do not use the sighting form
if (locationInputField) {
    locationInputField.addEventListener("input", autoFormatLocation);
}

/**
 * Automatically formats the location field while the user types
 *
 * Goal:
 * - Keep only letters, spaces, and commas
 * - Capitalize city words nicely
 * - Make the state part uppercase if the user enters an abbreviation
 *
 * Examples:
 * - "springfield, mo" becomes "Springfield, MO"
 * - "saint louis, missouri" becomes "Saint Louis, MISSOURI"
 *
 * Note:
 * This function helps guide the user toward a clean format,
 * but the actual validation still happens in the form submission check.
 */
function autoFormatLocation() {
    let value = locationInputField.value;

    // Remove anything that is not a letter, comma, or space
    // This keeps numbers and special symbols out of the location field
    value = value.replace(/[^A-Za-z,\s]/g, "");

    // Split the text into two parts using the comma
    // Part 1 should be the city
    // Part 2 should be the state
    let parts = value.split(",");

    if (parts.length === 1) {
        // If the user has only typed the city so far,
        // capitalize the first letter of each word
        value = parts[0]
            .toLowerCase()
            .replace(/\b\w/g, c => c.toUpperCase());

    } else if (parts.length >= 2) {
        // Format the city nicely
        let city = parts[0]
            .toLowerCase()
            .replace(/\b\w/g, c => c.toUpperCase())
            .trim();

        // Clean up the state portion
        let state = parts[1].trim();

        // If the state is only 2 letters long,
        // treat it like an abbreviation and make it uppercase
        if (state.length <= 2) {
            state = state.toUpperCase();
        } else {
            // Otherwise, treat it like a full state name
            // and capitalize each word normally
            state = state
                .toLowerCase()
                .replace(/\b\w/g, c => c.toUpperCase());
        }

        // Put the city and state back together in a clean format
        value = city + ", " + state;
    }

    // Update the input box with the cleaned and formatted version
    locationInputField.value = value;
}


// ==========================
// BIRD SIGHTING FORM
// ==========================

// Get form element
let birdSighting = document.getElementById("BirdSighting");

if (birdSighting) {
    birdSighting.addEventListener("submit", birdSightingForm);
}

/**
 * Validates bird sighting form input
 */
function birdSightingForm(event) {
    event.preventDefault();

    let birdName = document.getElementById("birdName").value.trim();
    let location = document.getElementById("location").value.trim();
    let dateSeen = document.getElementById("dateSeen").value.trim();
    let numberOfBirds = Number(document.getElementById("numberOfBirds").value);
    let notes = document.getElementById("notes").value;

    let error = document.getElementById("error");
    let result = document.getElementById("result");

    // Clear previous messages
    error.textContent = "";
    result.textContent = "";

    // This pattern allows:
    // - City, ST
    // - City, State
    // Examples:
    // - Springfield, MO
    // - Columbia, Missouri
    let locationPattern = /^[A-Za-z\s]+,\s*(?:[A-Za-z]{2}|[A-Za-z\s]+)$/;

    try {
        if (birdName === "" || location === "") {
            throw "Please fill in all required fields";
        }

        if (dateSeen === "") {
            throw "Please select a date";
        }

        if (/\d/.test(birdName)) {
            throw "Bird Name cannot contain numbers";
        }

        // Make sure the location matches the required format
        if (!locationPattern.test(location)) {
            throw "Enter location as City, ST or City, State";
        }

        if (birdName.length < 3) {
            throw "Bird name must be at least 3 characters";
        }

        if (notes.length > 200) {
            throw "Notes must be under 200 characters";
        }

        if (isNaN(numberOfBirds) || numberOfBirds <= 0) {
            throw "Number of birds must be greater than zero";
        }

        result.textContent = "Sighting recorded successfully";

    } catch (err) {
        error.textContent = err;
    }
}


// ==========================
// DEVICE INFO
// ==========================

// Displays info about user's browser/device
let deviceInfo = document.getElementById("deviceInfo");

if (deviceInfo) {
    deviceInfo.innerHTML =
        "Browser Name: " + navigator.appName + "<br>" +
        "Browser Version: " + navigator.appVersion + "<br>" +
        "Language: " + navigator.language + "<br>" +
        "Platform: " + navigator.platform + "<br>" +
        "Screen Width: " + screen.width + "<br>" +
        "Screen Height: " + screen.height;
}


// ==========================
// BIRD DATA
// ==========================

let birds = [];

fetch("birds.json")
  .then(res => res.json())
  .then(data => {
    displayBirds(data);
  });



// ==========================
// DISPLAY BIRDS
// ==========================

/**
 * Displays bird cards on the page
 */
function displayBirds(birdList) {
    let container = document.getElementById("birdContainer");

    // Stop immediately if this page does not contain the bird grid
    if (!container) return;

    // Clear old bird cards before drawing new ones
    container.innerHTML = "";

    birdList.forEach(bird => {
        let card = document.createElement("div");
        card.classList.add("bird-card");

        card.innerHTML = `
            <img src="${bird.image}" alt="${bird.name}">
            <h4>${bird.name}</h4>
            <p>${bird.description}</p>
        `;

        container.appendChild(card);
    });
}

// Show all birds when page loads
if (document.getElementById("birdContainer")) {
    displayBirds(birds);
}

fetch("nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;
  });
