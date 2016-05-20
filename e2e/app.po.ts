export class CanvasAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('canvas-app-app h1')).getText();
  }
}
