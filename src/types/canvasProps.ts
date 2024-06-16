export interface ILineProps {
  color?: string | CanvasGradient | CanvasPattern
  width?: number
  dashed?: number[]
}

export interface ICircleProps {
  color?: string | CanvasGradient | CanvasPattern
  dashed?: number[]
  fill?: boolean
}

export interface IRectProps extends ILineProps {
  fill?: boolean
}

export interface IGeometricProps {
    marginx: number
    marginy: number
    height: number
    width: number
    start: [number, number]  
  }

export interface ITextProps {
  fontWeight?: 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  fontSize?: number
  fontFamily?: string
  color?: string | CanvasGradient | CanvasPattern
  textBaseLine?: 'middle' | 'top' | "bottom"
  textAlign?: 'start' | 'end' | 'left' | 'center' | 'right'
}

export interface ICanvasGeometricProps {
  spareSpaceCanvas: {
    x: number,
    y: number
  }
  startCanvas: {
    startx: number,
    starty: number,
    endx: number,
    endy: number
  }
  ratioCanvas: {
    y: number
  }
  tensionCanvas: {
    y: number
  }
  neutralLineCanvas: {
    y: number,
    startx: number,
    endx: number
    marginx: number
  }
  steelsCanvas: {
    positiveSteel: {
      y: number
    },
    negativeSteel: {
      y: number
    },
    marginy: number
    marginx: number
  }
  quota: {
    trace: number
    margin: number
  }
}

