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
    var c = <HTMLCanvasElement>document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(100,100);
    ctx.lineTo(200,100);
    ctx.lineTo(100,500);
    ctx.lineTo(100,100);
    ctx.stroke();
  }

}
