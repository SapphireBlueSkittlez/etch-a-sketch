let container = document.getElementById('container');

let numGrid = 16;

//container.style.backgroundColor = 'red';

for(let i = 0; i < numGrid; i++) {
    let row = document.createElement('div');
    row.className = 'rowContainer';
    row.style.display = 'block';
    for(let j = 0; j < numGrid; j++) {
        let div = document.createElement('div');
        div.className = 'grid';
        div.style.backgroundColor = '#f3f3f3';
        div.style.height = (960 / numGrid) + 'px';
        div.style.width = (960 / numGrid) + 'px';
        //div.textContent = i + " : " + j;
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = 'black';
        });
        row.appendChild(div);
    }
    container.appendChild(row);
}