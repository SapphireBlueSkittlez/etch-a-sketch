let container = document.getElementById('container');
let resetBtn = document.getElementById('reset');
let numGrid = 16;

resetBtn.addEventListener('click', resetGrid);

function resetGrid() {
    let numSquares = prompt('How many pixels for the grid?', 'enter a number less than 100');
    removeGrid(container);
    createGrid(Number(numSquares));
}

function createGrid(numSquares) {
    for(let i = 0; i < numSquares; i++) {
        let row = document.createElement('div');
        row.className = 'rowContainer';
        row.style.display = 'block';
        for(let j = 0; j < numSquares; j++) {
            let div = document.createElement('div');
            div.className = 'grid';
            div.style.backgroundColor = '#f3f3f3';
            div.style.height = (960 / numSquares) + 'px';
            console.log(div.style.height);
            div.style.width = (960 / numSquares) + 'px';
            //div.textContent = i + " : " + j;
            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = 'black';
            });
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

function removeGrid(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}