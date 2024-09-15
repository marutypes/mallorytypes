export default class Input {
  mousePos: { x: number; y: number } = { x: 0, y: 0 };
  mouseDown: boolean = false;
  mouseDownThisFrame: boolean = false;

  setMousePos(x: number, y: number) {
    this.mousePos = { x, y };
  }

  setMouseDown(isDown: boolean) {
    if (this.mouseDown == false && isDown == true) {
      this.mouseDownThisFrame = true;
    }
    this.mouseDown = isDown;
  }

  lateUpdate() {
    this.mouseDownThisFrame = false;
  }
}
