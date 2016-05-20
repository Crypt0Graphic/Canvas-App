import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CanvasAppAppComponent } from '../app/canvas-app.component';

beforeEachProviders(() => [CanvasAppAppComponent]);

describe('App: CanvasApp', () => {
  it('should create the app',
      inject([CanvasAppAppComponent], (app: CanvasAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'canvas-app works!\'',
      inject([CanvasAppAppComponent], (app: CanvasAppAppComponent) => {
    expect(app.title).toEqual('canvas-app works!');
  }));
});
