const gridDoc = document.getElementById('grid');
const penMode = document.getElementById('penMode');
const rainbowMode = document.getElementById('rainbowMode');
const clearCanvas = document.getElementById('clearCanvas');
const erase = document.getElementById('erase');
const colorValue = document.getElementById('colorpicker');
const gridEle = document.getElementById('div');

let mode = 'pen';
let size = 16;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

penMode.onclick = () => setMode('pen');
rainbowMode.onclick = () => setMode('rainbow');
erase.onclick = () => setMode('erase');
clearCanvas.onclick = () => setClear();
gridEle.onclick = () => 

function setMode(newMode){
    mode = newMode;
}

function setClear(){
    gridDoc.innerHTML = '';
    setGrid(16);
}


function setGrid(size){
    for(let i = 0; i < size*size; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridElement');
        gridSquare.addEventListener('mouseover', changeColor);
        gridSquare.addEventListener('mousedown', changeColor);
        gridSquare.style.backgroundColor = 'white';
        gridSquare.style.minWidth = '30px';
        gridSquare.style.minHeight = '30px';
        gridDoc.appendChild(gridSquare);
    }
    
}

function changeColor(e){
    if(mode === 'pen' && mouseDown){
        e.target.style.backgroundColor = colorValue.value;
    }
    if(mode === 'rainbow' && mouseDown){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${r},${g},${b}`;
    }
    if(mode === 'erase' && mouseDown){
        e.target.style.backgroundColor = 'white';
    }
}

//window loading stuff
window.onload = () => {
    setGrid(size);
}