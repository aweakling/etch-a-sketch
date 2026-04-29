const container = document.querySelector("#container");
const resetBtn = document.querySelector(".resetBtn");
const squareBtn = document.querySelector(".squareBtn");

// create 16 squares
function sketch(){    
    squareBtn.addEventListener("click", () => {
        let size = parseInt(prompt("Size of grid", 16));

        if(size > 64) size = 64;

        container.innerHTML = "";

        container.style.setProperty("--size", size);

        for(let i = 0; i < size * size; i++){
            const squares = document.createElement("div");

            squares.classList.add("miniSquares");

            squares.addEventListener("mouseenter", () => {
                squares.style.backgroundColor = "black"
            });

            container.appendChild(squares);

            // for(let j = 1; j <= size; j++) {
            //     const miniSquares = document.createElement("div");

            //     miniSquares.classList.add("miniSquares");

            //     miniSquares.addEventListener("mouseenter", (e) => {
            //         miniSquares.style.backgroundColor = "black";
            //     });

            //     squares.appendChild(miniSquares);
            // }
        }
    });
}

resetBtn.addEventListener("click", () => {
    container.innerHTML = "";
});

sketch();
