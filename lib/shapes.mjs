class Shape {
  constructor(textColor, shapeColor, text) {
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.text = text;
  }

  toSVG() {
    throw new Error("The toSVG method must be implemented in the subclass.");
  }
}

class Triangle extends Shape {
  toSVG() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,20 30,180 270,180" fill="${this.shapeColor}" />
        <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

class Square extends Shape {
  toSVG() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill="${this.shapeColor}" />
        <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

class Circle extends Shape {
  toSVG() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="150" y="100" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

export { Triangle, Square, Circle };
