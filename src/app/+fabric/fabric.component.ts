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

    //Alternatif 1
    // fabric.Image.fromURL('../../clips/kupurFirst.jpg', function(oImg) {
    // // scale image down, and flip it, before adding it onto canvas
    // canvas.add(oImg);
    // });
    //
    // fabric.Image.fromURL('../../clips/kupurSecond.jpg', function(oImg) {
    // canvas.add(oImg);
    // });

    canvas.on({
    'object:moving': onChange,
    'object:scaling': onChange,
    'object:rotating': onChange,
    });

     function onChange(options) {
      options.target.setCoords();
      canvas.forEachObject(function(obj) {
        if (obj === options.target) return;
        obj.setOpacity(options.target.intersectsWithObject(obj) ? 0.5 : 1);
      });
    }

  }

}
