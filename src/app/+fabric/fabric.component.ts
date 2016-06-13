import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-fabric',
  templateUrl: 'fabric.component.html',
  styleUrls: ['fabric.component.css']
})
export class FabricComponent implements OnInit {

  public canvas: any;
  public src: string;

  constructor() { }

  ngOnInit() {

    this.canvas = new fabric.Canvas('c');
    this.src = "../../clips/kupurSecond.jpg";

    loadCanvas(this.src, this.canvas);


    // Works normally until click event (clip1) fires
    this.canvas.on('mouse:down', function (event) {
      console.log("Down");
    });
  }

  // Problem with this.canvas
  public clip1() {
    loadCanvas(this.src, this.canvas);
    this.canvas.clipTo = function (ctx) {
      console.log("clip1");
    };

    //this.canvas.off('mouse:down');

  };

  // No problem with new canvas element
  public clip2() {
    var canvas = new fabric.Canvas('c');
    loadCanvas(this.src, canvas);
    //canvas.stateful = false;

    canvas.clipTo = (ctx) => {
      console.log("clip2");
    };
  }

}

var loadCanvas = (src: string, canvas: any) => {
  fabric.Image.fromURL(src, (oImg) => {
    canvas.add(oImg);
  }, { hasControls: false, selectable: false, evented: false, strokeDashArray: [2, 2], opacity: 1 });

}





















