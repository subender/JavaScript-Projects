const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");

//Array of quotes

const quoteArray = [
  [
    "When you have a dream, you have got to grab it and never let go.",
    "Carol Burnett",
  ],
  [
    `Nothing is impossible. The word itself says ‘I’m possible!`,
    "Audrey Hepburn",
  ],
  [`There is nothing impossible to they who will try.`, "Alexander the Great"],
  [
    `The bad news is time flies. The good news is you’re the pilot.`,
    "Michael Altshuler",
  ],
  [
    `Life has got all those twists and turns. You’ve got to hold on tight and off you go.`,
    "Nicole Kidman",
  ],
  [
    `Keep your face always toward the sunshine, and shadows will fall behind you.`,
    "Walt Whitman",
  ],
  [
    `Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.`,
    "Amal Clooney",
  ],
  [
    `You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.`,
    "Duchess Meghan",
  ],
  [
    `Success is not final, failure is not fatal: it is the courage to continue that counts.`,
    "Winston Churchill",
  ],
  [
    `You define your own life. Don’t let other people write your script.`,
    "Oprah Winfrey",
  ],
  [
    `You are never too old to set another goal or to dream a new dream.`,
    "unknown",
  ],
  [
    `You don’t always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.`,
    "Mandy Hale",
  ],
];

//To Generate a random number based on the lenght of array.
const randomNumber = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

// variable to store the last index so that quote don't repeat
let oldIndex;

//1. This function will generate a random number by randomNumber() method.
//2. Checks if random number is same from last one and makes sure the number will not get repeated
//3. Uses the random number to generate a new quote from quoteArray.
// 4. Render the quote on webPage.

const renderQuote = function () {
  let index = randomNumber(quoteArray);
  console.log(index);

  while (index === oldIndex) {
    index = randomNumber(quoteArray);
  }
  let newQuote = quoteArray[index];

  quote.innerHTML = newQuote[0];
  author.innerHTML = newQuote[1];

  oldIndex = index; // update the old index.
};

// Show new quote on click on "Generate Quote" button.

btn.addEventListener("click", function () {
  renderQuote();
});
