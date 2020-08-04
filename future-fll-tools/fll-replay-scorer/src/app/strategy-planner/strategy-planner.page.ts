
// @Component({
//   selector: 'app-strategy-planner',
//   templateUrl: './strategy-planner.page.html',
//   styleUrls: ['./strategy-planner.page.scss'],
// })
// export class StrategyPlannerPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, ViewChild } from '@angular/core';
// import { Platform } from 'ionic-angular';
import { OnInit } from '@angular/core';
// import * as $ from 'jquery'
import { AfterViewInit } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';
// import { Base64ToGallery, Base64ToGalleryOptions } from '@ionic-native/base64-to-gallery/ngx';
 
// import * as draw from '../../assets/draw';

@Component({
  selector: 'app-strategy-planner',
  templateUrl: './strategy-planner.page.html',
  styleUrls: ['./strategy-planner.page.scss'],
})



export class StrategyPlannerPage implements OnInit {

    constructor(private plt: Platform,  private toastCtrl: ToastController) {}
   
    ngOnInit() {
      // // Set the Canvas Element and its size
      // this.canvasElement = this.canvas.nativeElement;
      // this.canvasElement.width = this.plt.width() + '';
      // this.canvasElement.height = 200;
    }

    ngAfterViewInit() {
      let renderingElement = <HTMLCanvasElement> document.getElementById("myCanvas");
      renderingElement.width = this.plt.width()/1.5;
      renderingElement.height = this.plt.width()/1.5 * 1856/3367.0
// create an offscreen canvas only for the drawings
let drawingElement = <HTMLCanvasElement> renderingElement.cloneNode();
let drawingCtx =  drawingElement.getContext('2d');
let renderingCtx = renderingElement.getContext('2d');
console.log(drawingCtx)
console.log(renderingCtx)

let img = new Image();
let brushSize = 5;
let brushColor = "red"
let drawingMode = 'brush';

let lastX;
let lastY;
let moving = false;

img.src = 'assets/images/head.jpg';
img.onload = () => {
  renderingCtx.drawImage(img, 0, 0,renderingElement.width ,renderingElement.height);
}

let eraseButton = document.getElementById('erase');
let brushButton = document.getElementById('brush');
let exportButton = document.getElementById('export');

eraseButton.addEventListener('click', () => {
  drawingMode = 'erase';
  brushSize = 20
})

brushButton.addEventListener('click', () => {
  drawingMode = 'brush';
  brushSize = 5
})


renderingElement.addEventListener('mousedown', (ev) => {
  
  moving = true;
  var canvasPosition = renderingElement.getBoundingClientRect();

  lastX = ev.pageX - canvasPosition.x;
  lastY = ev.pageY - canvasPosition.y;
})

renderingElement.addEventListener('mouseup', (ev) => {
  moving = false;
  var canvasPosition = renderingElement.getBoundingClientRect();

  lastX = ev.pageX - canvasPosition.x;
  lastY = ev.pageY - canvasPosition.y;
})

renderingElement.addEventListener('mousemove', (ev) => {
  console.log("click")
  // drawingMode = "brush"
  var canvasPosition = renderingElement.getBoundingClientRect();

  if (moving) {
    if (drawingMode === 'brush') {
      drawingCtx.globalCompositeOperation = "source-over";
    } else {
      drawingCtx.globalCompositeOperation = "destination-out";
    }
    let currentX = ev.pageX - canvasPosition.x;
    let currentY = ev.pageY - canvasPosition.y;


    drawingCtx.beginPath();
    drawingCtx.lineJoin = "round";
    drawingCtx.moveTo(lastX, lastY);
    drawingCtx.lineTo(currentX, currentY);
    drawingCtx.closePath();
    drawingCtx.strokeStyle = brushColor;
    drawingCtx.lineWidth = brushSize;
    drawingCtx.stroke();

    // renderingCtx.beginPath();
    // renderingCtx.lineJoin = "round";
    // renderingCtx.moveTo(lastX, lastY);
    // renderingCtx.lineTo(currentX, currentY);
    // renderingCtx.closePath();
    // renderingCtx.strokeStyle = brushColor;
    // renderingCtx.lineWidth = brushSize;
    // renderingCtx.stroke();

    lastX = currentX;
    lastY = currentY;

    // draw to visible canvas
    renderingCtx.clearRect(0, 0, renderingElement.width, renderingElement.height);
    renderingCtx.drawImage(img, 0, 0,renderingElement.width ,renderingElement.height );
    renderingCtx.globalCompositeOperation = 'source-atop';
    renderingCtx.drawImage(drawingElement, 0, 0,renderingElement.width ,renderingElement.height);
    
    // reset
    renderingCtx.globalCompositeOperation = 'source-over';
  }

});




renderingElement.addEventListener('touchstart', (ev) => {
  ev.preventDefault();
  moving = true;
  var canvasPosition = renderingElement.getBoundingClientRect();

  lastX = ev.touches[0].pageX - canvasPosition.x;
  lastY = ev.touches[0].pageY - canvasPosition.y;
})

renderingElement.addEventListener('touchend', (ev) => {
  ev.preventDefault();
  moving = false;
  var canvasPosition = renderingElement.getBoundingClientRect();

  lastX = ev.touches[0].pageX - canvasPosition.x;
  lastY = ev.touches[0].pageY - canvasPosition.y;
})

renderingElement.addEventListener('touchmove', (ev) => {
  ev.preventDefault();
  console.log("click")
  // drawingMode = "brush"
  var canvasPosition = renderingElement.getBoundingClientRect();

  if (moving) {
    if (drawingMode === 'brush') {
      drawingCtx.globalCompositeOperation = "source-over";
    } else {
      drawingCtx.globalCompositeOperation = "destination-out";
    }
    let currentX = ev.touches[0].pageX - canvasPosition.x;
    let currentY = ev.touches[0].pageY - canvasPosition.y;


    drawingCtx.beginPath();
    drawingCtx.lineJoin = "round";
    drawingCtx.moveTo(lastX, lastY);
    drawingCtx.lineTo(currentX, currentY);
    drawingCtx.closePath();
    drawingCtx.strokeStyle = brushColor;
    drawingCtx.lineWidth = brushSize;
    drawingCtx.stroke();

    // renderingCtx.beginPath();
    // renderingCtx.lineJoin = "round";
    // renderingCtx.moveTo(lastX, lastY);
    // renderingCtx.lineTo(currentX, currentY);
    // renderingCtx.closePath();
    // renderingCtx.strokeStyle = brushColor;
    // renderingCtx.lineWidth = brushSize;
    // renderingCtx.stroke();

    lastX = currentX;
    lastY = currentY;

    // draw to visible canvas
    renderingCtx.clearRect(0, 0, renderingElement.width, renderingElement.height);
    renderingCtx.drawImage(img, 0, 0,renderingElement.width ,renderingElement.height);
    renderingCtx.globalCompositeOperation = 'source-atop';
    renderingCtx.drawImage(drawingElement, 0, 0,renderingElement.width ,renderingElement.height);
    
    // reset
    renderingCtx.globalCompositeOperation = 'source-over';
  }

});


    }
  
}