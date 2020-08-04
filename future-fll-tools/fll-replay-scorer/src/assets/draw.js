let renderingElement = document.getElementById("myCanvas");
// create an offscreen canvas only for the drawings
let drawingElement = renderingElement.cloneNode();
let drawingCtx = drawingElement.getContext('2d');
let renderingCtx = renderingElement.getContext('2d');


let img = new Image();
let brushSize = 25;
let brushColor = "#000000"
let drawingMode = 'brush';

let lastX;
let lastY;
let moving = false;

img.src = 'https://i.pinimg.com/originals/49/af/b1/49afb1d21ae594cb7ac3534a15383711.png';
img.onload = () => {
  renderingCtx.drawImage(img, 0, 0);
}

let eraseButton = document.getElementById('erase');
let brushButton = document.getElementById('brush');
let exportButton = document.getElementById('export');

eraseButton.addEventListener('click', () => {
  drawingMode = 'erase';
})

brushButton.addEventListener('click', () => {
  drawingMode = 'brush';
})

renderingElement.addEventListener('mousedown', (ev) => {
  moving = true;
  lastX = ev.pageX - renderingElement.offsetLeft;
  lastY = ev.pageY - renderingElement.offsetTop;
})

renderingElement.addEventListener('mouseup', (ev) => {
  moving = false;
  lastX = ev.pageX - renderingElement.offsetLeft;
  lastY = ev.pageY - renderingElement.offsetTop;
})

renderingElement.addEventListener('mousemove', (ev) => {
  if (moving) {
    if (drawingMode === 'brush') {
      drawingCtx.globalCompositeOperation = "source-over";
    } else {
      drawingCtx.globalCompositeOperation = "destination-out";
    }
    let currentX = ev.pageX - renderingElement.offsetLeft;
    let currentY = ev.pageY - renderingElement.offsetTop;

    drawingCtx.beginPath();
    drawingCtx.lineJoin = "round";
    drawingCtx.moveTo(lastX, lastY);
    drawingCtx.lineTo(currentX, currentY);
    drawingCtx.closePath();
    drawingCtx.strokeStyle = brushColor;
    drawingCtx.lineWidth = brushSize;
    drawingCtx.stroke();

    lastX = currentX;
    lastY = currentY;

    // draw to visible canvas
    renderingCtx.clearRect(0, 0, renderingElement.width, renderingElement.height);
    renderingCtx.drawImage(img, 0, 0);
    renderingCtx.globalCompositeOperation = 'source-atop';
    renderingCtx.drawImage(drawingElement, 0, 0);
    
    // reset
    renderingCtx.globalCompositeOperation = 'source-over';
  }

});

