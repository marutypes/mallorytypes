export default class Color {
  r: number;
  g: number;
  b: number;
  a: number;

  constructor(r = 255, g = 255, b = 255, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  ToString() {
    return `${this.r}, ${this.b}, ${this.g}, ${this.a}`;
  }

  ToCSSRGBAString() {
    return `rgba(${this.r}, ${this.b}, ${this.g}, ${this.a})`;
  }
}
