import { Component } from '@angular/core';
import { CanvasComponent } from './+canvas';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { CanvasesComponent } from './+canvases';

@Component({
  moduleId: module.id,
  selector: 'canvas-app-app',
  templateUrl: 'canvas-app.component.html',
  styleUrls: ['canvas-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/canvas', component: CanvasComponent},
  {path: '/canvases', component: CanvasesComponent}
])
export class CanvasAppAppComponent {
  title = 'Ana Sayfa!';
}
