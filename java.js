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


/*
  Bird Website JavaScript File
*/

// ==========================
// SEED COST CALCULATOR
// ==========================

let form = document.getElementById("SeedCalculator");

if (form) {
    form.addEventListener("submit", runCalculator);
}

function runCalculator(event) {
    event.preventDefault();

    let pounds = Number(document.getElementById("seedPounds").value);
    let price = Number(document.getElementById("pricePerPound").value);

    let total = pounds * price;

    document.getElementById("calcResult").textContent =
        "Total cost: $" + total;
}


// ==========================
// BIRD IDENTIFIER (COLOR)
// ==========================

let colorMenu = document.getElementById("colorChoice");

if (colorMenu) {
    colorMenu.addEventListener("change", identifyBird);
}

function identifyBird() {
    let color = document.getElementById("colorChoice").value;

    let birdResult = document.getElementById("birdResult");
    let birdImage = document.getElementById("birdImage");

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
        birdResult.textContent = "Please select a color to identify a bird.";
        birdImage.src = "";
        birdImage.style.display = "none";
    }
}

const specificTaxonomy = {

  // Songbirds / Passeriformes
  "Northern Cardinal": { order: "Passeriformes", family: "Cardinalidae" },
  "Blue Jay": { order: "Passeriformes", family: "Corvidae" },
  "American Robin": { order: "Passeriformes", family: "Turdidae" },
  "House Sparrow": { order: "Passeriformes", family: "Passeridae" },
  "European Starling": { order: "Passeriformes", family: "Sturnidae" },

  "American Crow": { order: "Passeriformes", family: "Corvidae" },
  "Fish Crow": { order: "Passeriformes", family: "Corvidae" },

  "Baltimore Oriole": { order: "Passeriformes", family: "Icteridae" },
  "Orchard Oriole": { order: "Passeriformes", family: "Icteridae" },
  "Red-winged Blackbird": { order: "Passeriformes", family: "Icteridae" },
  "Common Grackle": { order: "Passeriformes", family: "Icteridae" },
  "Great-tailed Grackle": { order: "Passeriformes", family: "Icteridae" },
  "Brown-headed Cowbird": { order: "Passeriformes", family: "Icteridae" },
  "Bobolink": { order: "Passeriformes", family: "Icteridae" },
  "Rusty Blackbird": { order: "Passeriformes", family: "Icteridae" },
  "Yellow-headed Blackbird": { order: "Passeriformes", family: "Icteridae" },

  "House Finch": { order: "Passeriformes", family: "Fringillidae" },
  "American Goldfinch": { order: "Passeriformes", family: "Fringillidae" },
  "Pine Siskin": { order: "Passeriformes", family: "Fringillidae" },
  "Evening Grosbeak": { order: "Passeriformes", family: "Fringillidae" },
  "Purple Finch": { order: "Passeriformes", family: "Fringillidae" },

  "Rose-breasted Grosbeak": { order: "Passeriformes", family: "Cardinalidae" },
  "Blue Grosbeak": { order: "Passeriformes", family: "Cardinalidae" },
  "Indigo Bunting": { order: "Passeriformes", family: "Cardinalidae" },
  "Scarlet Tanager": { order: "Passeriformes", family: "Cardinalidae" },
  "Summer Tanager": { order: "Passeriformes", family: "Cardinalidae" },
  "Dickcissel": { order: "Passeriformes", family: "Cardinalidae" },

  "Eastern Bluebird": { order: "Passeriformes", family: "Turdidae" },

  "Carolina Wren": { order: "Passeriformes", family: "Troglodytidae" },
  "House Wren": { order: "Passeriformes", family: "Troglodytidae" },
  "Marsh Wren": { order: "Passeriformes", family: "Troglodytidae" },
  "Winter Wren": { order: "Passeriformes", family: "Troglodytidae" },

  "Black-capped Chickadee": { order: "Passeriformes", family: "Paridae" },
  "Carolina Chickadee": { order: "Passeriformes", family: "Paridae" },
  "Tufted Titmouse": { order: "Passeriformes", family: "Paridae" },

  "White-breasted Nuthatch": { order: "Passeriformes", family: "Sittidae" },
  "Red-breasted Nuthatch": { order: "Passeriformes", family: "Sittidae" },

  "Warbling Vireo": { order: "Passeriformes", family: "Vireonidae" },
  "Bell’s Vireo": { order: "Passeriformes", family: "Vireonidae" },

  "Common Yellowthroat": { order: "Passeriformes", family: "Parulidae" },
  "Yellow Warbler": { order: "Passeriformes", family: "Parulidae" },
  "Yellow-rumped Warbler": { order: "Passeriformes", family: "Parulidae" },
  "Blackpoll Warbler": { order: "Passeriformes", family: "Parulidae" },
  "Tennessee Warbler": { order: "Passeriformes", family: "Parulidae" },
  "Nashville Warbler": { order: "Passeriformes", family: "Parulidae" },
  "Chestnut-sided Warbler": { order: "Passeriformes", family: "Parulidae" },
  "Wilson’s Warbler": { order: "Passeriformes", family: "Parulidae" },
  "Cape May Warbler": { order: "Passeriformes", family: "Parulidae" },

  "Cedar Waxwing": { order: "Passeriformes", family: "Bombycillidae" },
  "Brown Creeper": { order: "Passeriformes", family: "Certhiidae" },
  "Loggerhead Shrike": { order: "Passeriformes", family: "Laniidae" },

  "Eastern Towhee": { order: "Passeriformes", family: "Passerellidae" },
  "Dark-eyed Junco": { order: "Passeriformes", family: "Passerellidae" },
  "Chipping Sparrow": { order: "Passeriformes", family: "Passerellidae" },
  "White-throated Sparrow": { order: "Passeriformes", family: "Passerellidae" },
  "White-crowned Sparrow": { order: "Passeriformes", family: "Passerellidae" },
  "Harris’s Sparrow": { order: "Passeriformes", family: "Passerellidae" },
  "Lincoln’s Sparrow": { order: "Passeriformes", family: "Passerellidae" },
  "Clay-colored Sparrow": { order: "Passeriformes", family: "Passerellidae" },
  "Henslow’s Sparrow": { order: "Passeriformes", family: "Passerellidae" },
  "Grasshopper Sparrow": { order: "Passeriformes", family: "Passerellidae" },
  "Vesper Sparrow": { order: "Passeriformes", family: "Passerellidae" },
  "Lark Sparrow": { order: "Passeriformes", family: "Passerellidae" },
  "LeConte’s Sparrow": { order: "Passeriformes", family: "Passerellidae" },

  // Raptors & Owls
  "Bald Eagle": { order: "Accipitriformes", family: "Accipitridae" },
  "Red-tailed Hawk": { order: "Accipitriformes", family: "Accipitridae" },
  "Northern Harrier": { order: "Accipitriformes", family: "Accipitridae" },
  "Cooper’s Hawk": { order: "Accipitriformes", family: "Accipitridae" },
  "Sharp-shinned Hawk": { order: "Accipitriformes", family: "Accipitridae" },
  "Broad-winged Hawk": { order: "Accipitriformes", family: "Accipitridae" },
  "Swainson’s Hawk": { order: "Accipitriformes", family: "Accipitridae" },
  "Ferruginous Hawk": { order: "Accipitriformes", family: "Accipitridae" },
  "Golden Eagle": { order: "Accipitriformes", family: "Accipitridae" },
  "Northern Goshawk": { order: "Accipitriformes", family: "Accipitridae" },
  "Rough-legged Hawk": { order: "Accipitriformes", family: "Accipitridae" },

  "American Kestrel": { order: "Falconiformes", family: "Falconidae" },
  "Peregrine Falcon": { order: "Falconiformes", family: "Falconidae" },

  "Turkey Vulture": { order: "Cathartiformes", family: "Cathartidae" },
  "Black Vulture": { order: "Cathartiformes", family: "Cathartidae" },

  "Osprey": { order: "Accipitriformes", family: "Pandionidae" },

  "Great Horned Owl": { order: "Strigiformes", family: "Strigidae" },
  "Barred Owl": { order: "Strigiformes", family: "Strigidae" },
  "Eastern Screech Owl": { order: "Strigiformes", family: "Strigidae" },
  "Snowy Owl": { order: "Strigiformes", family: "Strigidae" },
  "Short-eared Owl": { order: "Strigiformes", family: "Strigidae" },
  "Northern Saw-whet Owl": { order: "Strigiformes", family: "Strigidae" },
  "Long-eared Owl": { order: "Strigiformes", family: "Strigidae" },
  "Burrowing Owl": { order: "Strigiformes", family: "Strigidae" },
  "Great Gray Owl": { order: "Strigiformes", family: "Strigidae" },
  "Elf Owl": { order: "Strigiformes", family: "Strigidae" },
  "Barn Owl": { order: "Strigiformes", family: "Tytonidae" },

  // Woodpeckers
  "Downy Woodpecker": { order: "Piciformes", family: "Picidae" },
  "Hairy Woodpecker": { order: "Piciformes", family: "Picidae" },
  "Red-bellied Woodpecker": { order: "Piciformes", family: "Picidae" },
  "Northern Flicker": { order: "Piciformes", family: "Picidae" },
  "Pileated Woodpecker": { order: "Piciformes", family: "Picidae" },
  "Red-headed Woodpecker": { order: "Piciformes", family: "Picidae" },
  "Yellow-bellied Sapsucker": { order: "Piciformes", family: "Picidae" },

  // Waterfowl / Aquatic
  "Mallard": { order: "Anseriformes", family: "Anatidae" },
  "Canada Goose": { order: "Anseriformes", family: "Anatidae" },
  "Wood Duck": { order: "Anseriformes", family: "Anatidae" },
  "Lesser Scaup": { order: "Anseriformes", family: "Anatidae" },
  "Ruddy Duck": { order: "Anseriformes", family: "Anatidae" },
  "Black-bellied Whistling-Duck": { order: "Anseriformes", family: "Anatidae" },

  "Trumpeter Swan": { order: "Anseriformes", family: "Anatidae" },
  "Tundra Swan": { order: "Anseriformes", family: "Anatidae" },

  "Pied-billed Grebe": { order: "Podicipediformes", family: "Podicipedidae" },
  "Horned Grebe": { order: "Podicipediformes", family: "Podicipedidae" },

  "Common Loon": { order: "Gaviiformes", family: "Gaviidae" },

  "American Coot": { order: "Gruiformes", family: "Rallidae" },
  "Sora": { order: "Gruiformes", family: "Rallidae" },

  "Sandhill Crane": { order: "Gruiformes", family: "Gruidae" },
  "Whooping Crane": { order: "Gruiformes", family: "Gruidae" },

  // Shorebirds / Waders
  "Great Blue Heron": { order: "Pelecaniformes", family: "Ardeidae" },
  "Great Egret": { order: "Pelecaniformes", family: "Ardeidae" },
  "Green Heron": { order: "Pelecaniformes", family: "Ardeidae" },
  "Black-crowned Night Heron": { order: "Pelecaniformes", family: "Ardeidae" },
  "Yellow-crowned Night Heron": { order: "Pelecaniformes", family: "Ardeidae" },
  "Snowy Egret": { order: "Pelecaniformes", family: "Ardeidae" },
  "Cattle Egret": { order: "Pelecaniformes", family: "Ardeidae" },

  "White Ibis": { order: "Pelecaniformes", family: "Threskiornithidae" },
  "Glossy Ibis": { order: "Pelecaniformes", family: "Threskiornithidae" },

  "Killdeer": { order: "Charadriiformes", family: "Charadriidae" },
  "Spotted Sandpiper": { order: "Charadriiformes", family: "Scolopacidae" },
  "Least Sandpiper": { order: "Charadriiformes", family: "Scolopacidae" },

  // Gulls & Terns
  "Ring-billed Gull": { order: "Charadriiformes", family: "Laridae" },
  "Herring Gull": { order: "Charadriiformes", family: "Laridae" },
  "Bonaparte’s Gull": { order: "Charadriiformes", family: "Laridae" },
  "Common Tern": { order: "Charadriiformes", family: "Laridae" },
  "Forster’s Tern": { order: "Charadriiformes", family: "Laridae" },
  "Black Tern": { order: "Charadriiformes", family: "Laridae" },

  // Misc
  "Belted Kingfisher": { order: "Coraciiformes", family: "Alcedinidae" },
  "Ruby-throated Hummingbird": { order: "Apodiformes", family: "Trochilidae" },
  "Chimney Swift": { order: "Apodiformes", family: "Apodidae" },
  "Common Nighthawk": { order: "Caprimulgiformes", family: "Caprimulgidae" },
  "Chuck-will's-widow": { order: "Caprimulgiformes", family: "Caprimulgidae" },
  "Whip-poor-will": { order: "Caprimulgiformes", family: "Caprimulgidae" },

  // Gamebirds
  "Wild Turkey": { order: "Galliformes", family: "Phasianidae" },
  "Northern Bobwhite": { order: "Galliformes", family: "Odontophoridae" },

  // Other
  "Rock Pigeon": { order: "Columbiformes", family: "Columbidae" },
  "Monk Parakeet": { order: "Psittaciformes", family: "Psittacidae" }

};

const fallbackTaxonomy = {
  order: "Unknown",
  family: "Unknown"
};

// ==========================
// BIRD DATA
// ==========================

let birds = [];

fetch("birds.json")
  .then(res => res.json())
  .then(data => {

    // 🔥 APPLY TAXONOMY HERE
    birds = data.map(bird => {

      if (specificTaxonomy[bird.name]) {
        bird.order = specificTaxonomy[bird.name].order;
        bird.family = specificTaxonomy[bird.name].family;
      } else {
        bird.order = bird.order || fallbackTaxonomy.order;
        bird.family = bird.family || fallbackTaxonomy.family;
      }

      return bird;
    });

    // 🔥 THEN DISPLAY
    displayBirds(birds);
    populateFamilyFilter(birds);
    document.getElementById("searchInput").addEventListener("input", filterBirds);
    document.getElementById("typeFilter").addEventListener("change", filterBirds);
    document.getElementById("familyFilter").addEventListener("change", filterBirds);
  });

// ==========================
// DISPLAY BIRDS
// ==========================

function displayBirds(birdList) {
    let container = document.getElementById("birdContainer");
    if (!container) return;

    container.innerHTML = "";

    birdList.forEach(bird => {
        let card = document.createElement("div");
        card.classList.add("bird-card");

        card.innerHTML = `
            <img src="${bird.image}" alt="${bird.name}">
            <h4>${bird.name}</h4>
            <p>${bird.description}</p>
        `;

    // CLICK EVENT → OPEN MODAL
    card.addEventListener("click", () => {
        document.getElementById("modalImage").src = bird.image;
        document.getElementById("modalName").textContent = bird.name;
        document.getElementById("modalScientific").textContent = bird.scientific || "";
        document.getElementById("modalConservation").textContent = bird.conservationStatus;

        /* taxonomy */
        document.getElementById("modalOrder").textContent = bird.order;
        document.getElementById("modalFamily").textContent = bird.family;

        /* sections */
        document.getElementById("modalDescription").textContent = bird.description;
        document.getElementById("modalBehaviorText").textContent = bird.behaviorDetails;
        document.getElementById("modalHabitatText").textContent = bird.habitatDetails;

        /* info boxes */
        document.getElementById("modalHabitatBox").textContent = bird.habitat;
        document.getElementById("modalBehaviorBox").textContent = bird.behavior;
        document.getElementById("modalDiet").textContent = bird.diet;
        document.getElementById("modalNesting").textContent = bird.nesting;
        document.getElementById("modalConservation").textContent = bird.conservation;

        /* show modal */
        document.getElementById("birdModal").classList.add("show");
        document.body.style.overflow = "hidden";
    });

        // ✅ THIS WAS MISSING
        container.appendChild(card);
    });
}


// ==========================
// NAV LOAD
// ==========================

fetch("nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;
  });


// ==========================
// MODAL CLOSE
// ==========================

let modal = document.getElementById("birdModal");
let closeBtn = document.getElementById("closeModal");

closeBtn.onclick = () => {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
    }
};

// ==========================
// AUTO TAXONOMY MAPPING
// ==========================

const taxonomyMap = {
  "songbird": {
    order: "Passeriformes",
    family: "Various songbird families"
  },
  "raptor": {
    order: "Accipitriformes / Falconiformes",
    family: "Hawks, Eagles, Falcons"
  },
  "waterfowl": {
    order: "Anseriformes",
    family: "Anatidae"
  },
  "shorebird": {
    order: "Charadriiformes",
    family: "Various shorebird families"
  },
  "woodpecker": {
    order: "Piciformes",
    family: "Picidae"
  },
  "gamebird": {
    order: "Galliformes",
    family: "Phasianidae"
  }
};

function populateFamilyFilter(birds) {
  const familySet = new Set();

  birds.forEach(bird => {
    if (bird.family && bird.family !== "Unknown") {
      familySet.add(bird.family);
    }
  });

  const familyFilter = document.getElementById("familyFilter");

  familySet.forEach(family => {
    const option = document.createElement("option");
    option.value = family;
    option.textContent = family;
    familyFilter.appendChild(option);
  });

}

function filterBirds() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const type = document.getElementById("typeFilter").value;
  const family = document.getElementById("familyFilter").value;

  const filtered = birds.filter(bird => {

    const matchesSearch = bird.name.toLowerCase().includes(search);
    const matchesType = !type || bird.type === type;
    const matchesFamily = !family || bird.family === family;

    return matchesSearch && matchesType && matchesFamily;
  });

  displayBirds(filtered);
}
