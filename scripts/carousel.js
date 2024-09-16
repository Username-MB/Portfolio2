const carrouselCont = document.getElementById("carouselCont");

let ball1;
let ball;

const array = [
  { id: "card1", imageUrl: "assets/html.svg", text: "CSS/SCSS" },
  { id: "card2", imageUrl: "assets/html.svg", text: "HTML" },
  { id: "card3", imageUrl: "assets/html.svg", text: "JavaScript" },
  { id: "card4", imageUrl: "assets/html.svg", text: "React" },
  { id: "card5", imageUrl: "assets/html.svg", text: "Node.js" },
  { id: "card6", imageUrl: "assets/html.svg", text: "TypeScript" },
];

let currentStartIndex = 0; // Tracks the start of the current card set

function createCard() {
  // Clear the container before adding new cards
  carrouselCont.innerHTML = "";

  // Calculate the end index, ensuring not to go beyond the array length
  let endIndex = Math.min(currentStartIndex + 3, array.length);

  // Loop through the array and create a card for each object within the current range
  for (let i = currentStartIndex; i < endIndex; i++) {
    const item = array[i];

    // Create a div element for the card
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = item.id;

    // Create an image element
    const img = document.createElement("img");
    img.src = item.imageUrl;
    img.alt = item.text;
    img.classList.add("cardImg");

    // Create a paragraph element for the text
    const text = document.createElement("p");
    text.textContent = item.text;

    // Append the image and text to the card div
    card.appendChild(img);
    card.appendChild(text);

    // Append the card to the carrousel container
    carrouselCont.appendChild(card);
  }
}

// Function to move to the previous set of cards
function showPrevious() {
  if (currentStartIndex > 0) {
    currentStartIndex -= 3;
    createCard();
  }
}

// Function to move to the next set of cards
function showNext() {
  if (currentStartIndex + 3 < array.length) {
    currentStartIndex += 3;
    createCard();
  }
}

// Add event listeners to the navigation balls
ball1.addEventListener("click", showPrevious);
ball2.addEventListener("click", showNext);

// Initial card rendering
createCard();
