fetch("./symbolList.json")
  .then((response) => response.json())
  .then((json) => {
    const hiraganaList = json;

    const SymbolBox = document.querySelector(".symbol-box");
    const answerBox = document.querySelector(".answer-box");
    const scoreDisplay = document.querySelector(".score-display");

    let symbols = Object.keys(hiraganaList);
    let currentSymbol = null;
    let currentIndex = 0;
    let correctGuesses = 0;

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function showNextSymbol() {
      if (currentIndex >= symbols.length) {
        shuffle(symbols);
        currentIndex = 0;
      }
      const randomKey = symbols[currentIndex];
      currentSymbol = hiraganaList[randomKey];
      SymbolBox.textContent = currentSymbol;
      answerBox.value = "";
      currentIndex+=1;
    }

    shuffle(symbols);
    showNextSymbol();

    answerBox.addEventListener("input", () => {
      const userAnswer = answerBox.value;
      const correctAnswer = Object.keys(hiraganaList).find(
        (key) => hiraganaList[key] === currentSymbol
      );
      if (userAnswer === correctAnswer) {
        showNextSymbol();
        correctGuesses +=1;
        scoreDisplay.textContent = `Correct Guesses: ${correctGuesses}`;
      }
    });
  });