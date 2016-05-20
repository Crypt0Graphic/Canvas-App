import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-canvas',
  templateUrl: 'canvas.component.html',
  styleUrls: ['canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    var c = <HTMLCanvasElement>document.getElementById("mainCanvas");
    var ctx = c.getContext("2d");
    var img = new Image();

    var imgW;
    var imgH;

    img.onload = function() {

      imgW = img.width;
      imgH = img.height;
      c.width=imgW;
      c.height=imgH;

      ctx.drawImage(img, 0, 0);
    };

    img.src = './clips/kupur.jpg';
  }

}
