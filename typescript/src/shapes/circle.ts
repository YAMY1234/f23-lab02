import { Shape } from './shape.js';

class Circle implements Shape {
    constructor(private radius: number) {}

    computeArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

export function newCircle(radius: number): Shape {
    return new Circle(radius);
}
