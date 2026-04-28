const container = document.querySelector("#container");

// create 16 squares
for(let i = 1; i <= 16; i++){
    const squares = document.createElement("div");

    squares.style.boxSizing = "border-box";
    squares.style.width = "25%";
    squares.style.height = "100px";

    squares.style.border = "1px solid black";

    container.appendChild(squares);

    squares.addEventListener("mouseenter", () => {
        squares.style.backgroundColor = "red";
    });

    squares.addEventListener("mouseleave", () => {
        squares.style.backgroundColor = "";
    });

    for(let j = 1; j <= 16; j++) {
        const miniSquares = document.createElement("div");

        miniSquares.style.boxSizing = "border-box";
        miniSquares.style.width = "25%";
        miniSquares.style.height = "100px";

        miniSquares.style.border = "1px solid black";

        squares.appendChild(miniSquares);
        
        miniSquares.addEventListener("mouseenter", () => {
            miniSquares.style.backgroundColor = "blue";
        });

        miniSquares.addEventListener("mouseleave", () => {
            miniSquares.style.backgroundColor = "";
        });
    }
}

