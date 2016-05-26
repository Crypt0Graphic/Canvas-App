import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-fabric',
  templateUrl: 'fabric.component.html',
  styleUrls: ['fabric.component.css']
})
export class FabricComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var canvas = new fabric.Canvas('c');
    var imgElement1 = <HTMLImageElement>document.getElementById('my-image1');
    var imgElement2 = <HTMLImageElement>document.getElementById('my-image2');

    var img1 = new fabric.Image(imgElement1, { cornerColor: 'Red', borderColor: 'Red', lockUniScaling: true, transparentCorners: false, cornerSize: 6 });
    var img2 = new fabric.Image(imgElement2, { cornerColor: 'Red', borderColor: 'Red', lockUniScaling: true, transparentCorners: false, cornerSize: 6 });
    canvas.add(img1, img2);
  }
}