<h1>Canvas2D - Helper</h1>

[![TypeScript Version](https://img.shields.io/badge/TypeScript-^5-blue.svg)](https://shields.io/)
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Brunoengi/design-system/LICENSE)

<h2>Summary</h2>

<ol>
  <li><a href='#project'>What is the project</a></li>
  <li ><a href='#install'>Install Instructions</a></li>
  <li><a href='#use'>Use Instructions</a></li>
</ol>

<h3>1 - What is the project</h3>

The project is a repository to manipulate the HTML Canvas tag for use in 2D projects. The project provides a class and yout types that makes it possible to create a set of geometric representations, such as lines, circles, rectangles, texts and other features for drawing.

<h3>2 - Install Instructions</h3>

The project is available on github and npm, the first option on github will give you the complete project, both the development version and the production version. On npm, you will have only the production version, ready to use.

Step 1 - Create an HTML file and add a canvas tag and a script tag to import the dependency.


```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <canvas id='canvas'></canvas>                      /*Tag canvas here*/
  <script type="module" src='./index.js'></script>   /*Tag script here*/
</body>
</html>
```

Step 2 - Create the index.js file, in this file you must import the javascript class. If you are using Github, you already have an index.html and index.js file inserted as an example, you can download the project on Gitub and open the index.html in the browser. In addition to importing the class, you must create a DOM manipulation script to access the HTML Canvas tag, in the example, this was done with document.getElementById('canvas') but you can do it with other methods of the document object. 

An example is provided below:

```
import Canvas from "./dist/module/Canvas.js"

// Accessing the canvas
const myCanvasElement = document.getElementById('canvas')
const canvas = new Canvas(myCanvasElement)

// Examples about how to use the class to create a line, text, circle and rect
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


```