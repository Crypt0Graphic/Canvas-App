import { Component, OnInit } from '@angular/core';
//import {fabric} from 'fabric';

// import {GoogleTranslate} from '../modules/google.translate.service';

@Component({
  moduleId: module.id,
  selector: 'app-fabric',
  templateUrl: 'fabric.component.html',
  styleUrls: ['fabric.component.css']
})
export class FabricComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    var canvas = new fabric.Canvas('c');
    var imgElement1 = <HTMLImageElement>document.getElementById('my-image1');
    var imgElement2 = <HTMLImageElement>document.getElementById('my-image2');
    
    var img1 = new fabric.Image(imgElement1,{cornerColor:'Red', borderColor:'Red'});
    var img2 = new fabric.Image(imgElement2,{cornerColor:'Red'});
    
    img1.lockUniScaling = true;
    img2.lockUniScaling = true;
    canvas.add(img1, img2);
    
    //img1.setCornersize(3);
    
    // //Alternatif 1
    // fabric.Image.fromURL('../../clips/kupurFirst.jpg', function(oImg) {
    // canvas.add(oImg);
    // });
    
    // canvas.setBackgroundColor('#E5E5E5', canvas.renderAll.bind(canvas));

    // canvas.on({
    // 'object:moving': onChange,
    // 'object:scaling': onChange,
    // 'object:rotating': onChange
    // });

    //  function onChange(options) {
    //   options.target.setCoords();
    //   canvas.forEachObject(function(obj) {
    //     if (obj === options.target) return;
    //     obj.setOpacity(options.target.intersectsWithObject(obj) ? 0.6 : 1);
    //   });
    // }

  }

}
