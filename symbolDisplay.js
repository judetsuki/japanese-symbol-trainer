fetch("./symbolList.json")
  .then((response) => response.json())
  .then((json) => {
    const hiraganaList = json;

    const SymbolBox = document.querySelector(".symbol-box");
    const answerBox = document.querySelector(".answer-box");

    let currentSymbol = null;

    function showNextSymbol() {
      const randomKey =
        Object.keys(hiraganaList)[
          Math.floor(Math.random() * Object.keys(hiraganaList).length)
        ];
      currentSymbol = hiraganaList[randomKey];
      SymbolBox.textContent = currentSymbol;
      answerBox.value = "";
    }

    showNextSymbol();

    answerBox.addEventListener("input", () => {
      const userAnswer = answerBox.value;
      const correctAnswer = Object.keys(hiraganaList).find(
        (key) => hiraganaList[key] === currentSymbol
      );
      if (userAnswer === correctAnswer) {
        showNextSymbol();
      }
    });
  });
