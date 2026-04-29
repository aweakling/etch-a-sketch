const container = document.querySelector("#container");

// create 16 squares
for(let i = 1; i <= 16; i++){
    const squares = document.createElement("div");

    squares.classList.add("squares");

    squares.style.boxSizing = "border-box";

    container.appendChild(squares);

    for(let j = 1; j <= 16; j++) {
        const miniSquares = document.createElement("div");

        miniSquares.classList.add("miniSquares");

        miniSquares.style.boxSizing = "border-box";

        miniSquares.addEventListener("mouseenter", (e) => {
            miniSquares.style.backgroundColor = "black";
        });

        miniSquares.addEventListener("mouseleave", () => {
            miniSquares.style.backgroundColor = "";
        });

        squares.appendChild(miniSquares);
    }
}

