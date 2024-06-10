console.log("paint")

let lastMouseX = 0
let lastMouseY = 0
let mouseX = 0
let mouseY = 0
let clear = true
let drag = false
let userColor = "black"
let userSize = 1

class Button {
    constructor(x, y, w, h, text) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.text = text
    }
    isHit(x, y) {
        return x >= this.x && x <= this.x + this.w && y >= this.y && y <= this.y + this.h
    }
    draw(painter) {
        painter.pen = "black"
        painter.penWidth = 1
        painter.brush = "gray"
        painter.pixelSize = 20
        painter.drawRect(this.x, this.y, this.w, this.h)
        painter.drawText(this.x + 10, this.y, this.text)
    }
}

class CircleButton {
    constructor(x, y, r, color) {
        this.x = x
        this.y = y
        this.r = r
        this.color = color
    }
    isHit(x, y) {
        return Math.sqrt((x - this.x) * (x - this.x) + (y - this.y) * (y - this.y)) <= this.r
    }
    draw(painter) {
        painter.pen = this.color
        painter.penWidth = 1
        painter.brush = this.color
        painter.pixelSize = 20
        painter.drawCircle(this.x, this.y, this.r)
    }
}

let clearButton = new Button(5, 5, 70, 30, "Clear")
let redButton = new CircleButton(160, 20, 10, "red")
let greenButton = new CircleButton(190, 20, 10, "green")
let blueButton = new CircleButton(220, 20, 10, "blue")
let blackButton = new CircleButton(250, 20, 10, "black")
let whiteButton = new CircleButton(280, 20, 10, "white")

function start() {
    clear = true
}

function onMouseDown(x, y, btn) {
    console.log("mousePress", x, y, btn)
    drag = true
    mouseX = x
    mouseY = y
    if (clearButton.isHit(x, y)) {
        clear = true
    } else if (redButton.isHit(x, y)) {
        console.log("red")
        userColor = "red"
    } else if (greenButton.isHit(x, y)) {
        userColor = "green"
    } else if (blueButton.isHit(x, y)) {
        userColor = "blue"
    } else if (blackButton.isHit(x, y)) {
        userColor = "black"
    } else if (whiteButton.isHit(x, y)) {
        userColor = "white"
    }
}

function onMouseMove(x, y) {
    mouseX = x
    mouseY = y
}

function onMouseUp(x, y, btn) {
    console.log("mouseRelease", x, y, btn)
    drag = false
    mouseX = x
    mouseY = y
    lastMouseX = 0
    lastMouseY = 0
}

function paint(painter) {
    if (clear) {
        painter.clear()
        clear = false
        clearButton.draw(painter)
        redButton.draw(painter)
        greenButton.draw(painter)
        blueButton.draw(painter)
        blackButton.draw(painter)
        whiteButton.draw(painter)

        painter.penWidth = 1
        painter.pen = "black"
        painter.drawText(80, 5, "Color :")
        painter.drawText(80, 50, "1-9 key  : Size")
        return
    }

    if (drag) {
        if (lastMouseX == 0 && lastMouseY == 0) {
            lastMouseX = mouseX
            lastMouseY = mouseY
            return
        }
        painter.pen = userColor
        painter.penWidth = userSize
        painter.drawLine(lastMouseX, lastMouseY, mouseX, mouseY)
        lastMouseX = mouseX
        lastMouseY = mouseY
    }
}

function onKeyDown(key) {
    if (key == "0") {
        console.log("Clear!", key)
        live.showMessage("Clear!")
        clear = true
    } else {
        if (!isNaN(parseInt(key))) {
            console.log("Size:", key)
            live.showMessage("Size:" + key)
            userSize = key
        }
    }
}
