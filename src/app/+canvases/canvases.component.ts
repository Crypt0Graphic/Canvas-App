import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-canvases',
  templateUrl: 'canvases.component.html',
  styleUrls: ['canvases.component.css']
})
export class CanvasesComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    var canvasFirst = <HTMLCanvasElement>document.getElementById("firstCanvas");
    var ctxFirst = canvasFirst.getContext("2d");
    var imgFirst = new Image();

    var canvasSecond = <HTMLCanvasElement>document.getElementById("secondCanvas");
    var ctxSecond = canvasSecond.getContext("2d");
    var imgSecond = new Image();

    imgFirst.onload = function() {

      ctxFirst.drawImage(imgFirst, 0, 0);
      ctxSecond.drawImage(imgSecond, 0, 0);
    };

    imgFirst.src = './clips/kupurFirst.jpg';
    imgSecond.src = './clips/kupurSecond.jpg';
  }

}
