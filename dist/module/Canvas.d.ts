import type { IRectProps, ILineProps, ITextProps, ICircleProps } from '../types/canvasProps.d.ts';
export default class Canvas {
    private _component;
    private _context;
    constructor(component: HTMLCanvasElement);
    get component(): HTMLCanvasElement;
    get context(): CanvasRenderingContext2D;
    private resolution;
    erase(): void;
    middle(): {
        x: number;
        y: number;
    };
    drawLine([startx, starty, endx, endy]: [number, number, number, number], props?: ILineProps): void;
    drawRect([startx, starty, endx, endy]: [number, number, number, number], props?: IRectProps): void;
    drawCircle([startx, starty, radius, startAngle, endAngle]: [number, number, number, number, number], props?: ICircleProps): void;
    drawText([text, startx, starty]: [string, number, number], props?: ITextProps): void;
    translate(startx: number, starty: number): void;
}
