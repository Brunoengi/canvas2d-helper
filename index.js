import Canvas from "./dist/module/Canvas.js"

// Accessing the canvas
const myCanvasElement = document.getElementById('canvas')
const canvas = new Canvas(myCanvasElement)

// Examples about how use the class
canvas.drawLine([10, 10, 10, 100], {
  color: 'red'
})
canvas.drawText(['Example Text', 50, 20])

canvas.drawCircle([75, 75, 25, 0, 360], {
  color: 'purple'
})

canvas.drawRect([50, 50, 100, 100], {
  dashed: [5, 5],
  fill: false,
  color: 'green'
})

