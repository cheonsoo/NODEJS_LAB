class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {};
class Triangle extends Shape {
  getArea() { // Overwriting
    return this.width * this.height / 2;
  }
};

const rectangle = new Rectangle(20, 20, 'blue');
console.log(`rectangle: width: ${rectangle.width}, height: ${rectangle.height}, color: ${rectangle.color}`);
console.log(rectangle.draw());
console.log(rectangle.getArea());

const triangle = new Triangle(10, 10, 'red');
console.log(`triangle: width: ${triangle.width}, height: ${triangle.height}, color: ${triangle.color}`);
console.log(triangle.draw());
console.log(triangle.getArea());