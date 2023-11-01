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
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <polygon points="50,10 10,90 90,90" fill="${this.shapeColor}" />
        <text x="50" y="50" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

class Square extends Shape {
  toSVG() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <rect width="100" height="100" fill="${this.shapeColor}" />
        <text x="50" y="50" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

class Circle extends Shape {
  toSVG() {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <circle cx="50" cy="50" r="50" fill="${this.shapeColor}" />
        <text x="50" y="50" fill="${this.textColor}" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
      </svg>
    `;
  }
}

export { Triangle, Square, Circle };
