console.log("eye color")
let mouseX = 0
let mouseY = 0


let parts = []

function start() {
    parts = []
    for (let part of model.parts) {
        if (part.name.includes("瞳") ||
            part.name.includes("目玉")) {
            parts.push(part)
            continue
        }
        part.multiplyColor = Live.rgba(0.5, 0.5, 0.5, 1)
        console.log(part.name, part.id)
    }

    console.log(parts)
}

function onMouseMove(x, y) {
    mouseX = x
    mouseY = y
}

function paint(painter) {
    painter.clear()

    painter.pen = "red"
    painter.brush = "red"
    painter.drawCircle(0, 0, 10)

    painter.pen = "green"
    painter.brush = "green"
    painter.drawCircle(painter.width, 0, 10)

    painter.pen = "blue"
    painter.brush = "blue"
    painter.drawCircle(0, painter.height, 10)


    const green = mouseX / painter.width
    const blue = mouseY / painter.height
    const red = 1 - green - blue
    const color = Live.rgba(red, green, blue, 1)
    painter.pen = color
    painter.brush = color
    painter.drawCircle(mouseX, mouseY, 10)

    if (parts.length == 0) {
        painter.drawText(100, 100, "no parts : 瞳 or 目玉 ")
    }

    for (let part of parts) {
        part.multiplyColor = color
    }
}

function onDisable() {
    model.multiplyColor = Live.rgba(1, 1, 1, 1)
}
