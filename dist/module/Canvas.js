export default class Canvas {
    constructor(component) {
        this._component = component;
        this._context = component.getContext('2d');
        this.resolution();
        this.translate(0.5, 0.5);
    }
    get component() {
        return this._component;
    }
    get context() {
        return this._context;
    }
    resolution() {
        const dpr = window.devicePixelRatio;
        const rect = this._component.getBoundingClientRect();
        this._component.width = rect.width * dpr;
        this._component.height = rect.height * dpr;
        this._context.scale(dpr, dpr);
        this._component.style.width = `${rect.width}px`;
        this._component.style.height = `${rect.height}px`;
    }
    erase() {
        var _a;
        (_a = this._context) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this._component.width, this._component.height);
    }
    middle() {
        return {
            x: this._component.width / 2,
            y: this._component.height / 2
        };
    }
    drawLine([startx, starty, endx, endy], props) {
        props ? '' : props = {};
        props.color ? '' : props.color = 'black';
        props.width ? '' : props.width = 2;
        props.dashed ? '' : props.dashed = [0, 0];
        this._context.beginPath();
        this._context.strokeStyle = props.color;
        this._context.lineWidth = props.width;
        this._context.setLineDash(props.dashed);
        this._context.moveTo(startx, starty);
        this._context.lineTo(endx, endy);
        this._context.stroke();
    }
    drawRect([startx, starty, endx, endy], props) {
        props ? '' : props = {};
        props.color ? '' : props.color = 'black';
        props.width ? '' : props.width = 2;
        props.fill ? '' : props.fill = false;
        props.dashed ? '' : props.dashed = [0, 0];
        this._context.beginPath();
        this._context.strokeStyle = props.color;
        this._context.fillStyle = props.color;
        this._context.lineWidth = props.width;
        this._context.setLineDash(props.dashed);
        if (props.fill) {
            this._context.fillRect(startx, starty, endx - startx, endy - starty);
            this._context.fill();
            return;
        }
        this._context.rect(startx, starty, endx - startx, endy - starty);
        this._context.stroke();
    }
    drawCircle([startx, starty, radius, startAngle = 0, endAngle = 2 * Math.PI], props) {
        props ? "" : props = {
            fill: false,
            dashed: [0, 0],
            color: "black",
        };
        props.fill ? "" : props.fill = false;
        props.dashed ? this._context.setLineDash(props.dashed) : props.dashed = [0, 0];
        props.color ? "" : props.color = "black";
        this._context.beginPath();
        this._context.strokeStyle = props.color;
        this._context.arc(startx, starty, radius, startAngle, endAngle);
        props.fill ? this._context.fill() : this._context.stroke();
    }
    drawText([text, startx, starty], props) {
        props ? '' : props = {};
        props.textAlign ? '' : props.textAlign = 'center';
        props.fontWeight ? '' : props.fontWeight = 'bold';
        props.fontSize ? '' : props.fontSize = 12;
        props.fontFamily ? '' : props.fontFamily = 'Arial';
        props.color ? '' : props.color = 'Black';
        props.textBaseLine ? '' : props.textBaseLine = 'middle';
        this._context.textAlign = props.textAlign;
        this._context.fillStyle = props.color;
        this._context.textBaseline = props.textBaseLine;
        this._context.font = `${props.fontWeight} ${props.fontSize}px ${props.fontFamily}`;
        this._context.fillText(text, startx, starty);
    }
    translate(startx, starty) {
        this._context.translate(startx, starty);
    }
}
