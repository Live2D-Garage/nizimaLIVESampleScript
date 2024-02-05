console.log("image paint")

let mouseX = 0
let mouseY = 0
let drag = false


function onMouseDown(model, x, y, btn) {
    drag = true
    mouseX = x
    mouseY = y
}

function onMouseMove(model, x, y) {
    mouseX = x
    mouseY = y
}

function onMouseUp(model, x, y, btn) {
    drag = false
    mouseX = x
    mouseY = y
}

function paint(model, painter) {
    if (drag) {
        painter.penWidth = 60
        painter.drawImage(mouseX, mouseY, "white.png")
    }
}

