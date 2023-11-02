import { Square, Triangle, Circle } from "./shapes.mjs";

describe("Test shape classes", () => {
  test("Triangle render", () => {
    const triangle = new Triangle("red", "blue", "Tri");
    const svg = triangle.render();

    expect(svg).toMatch(
      `<polygon points="150,20 30,180 270,180" fill="red" />
      <text x="150" y="100" fill="blue" text-anchor="middle" alignment-baseline="middle">Tri</text>`
    );
  });

  test("Square render", () => {
    const square = new Square("yellow", "purple", "Sq");
    const svg = square.render();

    expect(svg).toMatch(
      `<rect width="300" height="200" fill="purple}" />
      <text x="150" y="100" fill="yellow" text-anchor="middle" alignment-baseline="middle">Sq</text>`
    );
  });

  test("Circle render", () => {
    const circle = new Circle("green", "orange", "Ci");
    const svg = circle.render();

    expect(svg).toMatch(
      `        <circle cx="150" cy="100" r="100" fill="orange" />
      <text x="150" y="100" fill=green" text-anchor="middle" alignment-baseline="middle">Ci</text>`
    );
  });
});
