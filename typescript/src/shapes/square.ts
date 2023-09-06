import { Shape } from './shape.js';

class Square implements Shape {
    constructor(private sideLen: number) {}

    computeArea(): number {
        return this.sideLen * this.sideLen;
    }
}

export function newSquare(sideLen: number): Shape {
    return new Square(sideLen);
}
