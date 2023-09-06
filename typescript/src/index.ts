import { newRenderer } from "./renderer";
import { newRectangle } from "./shapes/rectangle";

const rectangle = newRectangle(2, 3);
const renderer = newRenderer(rectangle);
renderer.draw();
