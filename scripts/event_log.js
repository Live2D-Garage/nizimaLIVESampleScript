console.log("event log", new Date().toString())

function onEnable() {
    console.log("onEnable!")
}

function start() {
    console.log("start!")
    live.showMessage("Script Start")
}

let updateCount = 0
let paintCount = 0
let mouseX = NaN
let mouseY = NaN
let lastKey = ""

function update() {
    if (updateCount == 0) {
        console.log("update! (first)")
    }
    updateCount++
}

function onDisable() {
    console.log("onDisable!")
}

function paint(painter) {
    if (paintCount == 0) {
        console.log("paint! (first)")
    }
    paintCount++
    painter.clear()
    painter.pen = "red"
    painter.pointSize = 15
    const dy = painter.pointSize + 3
    painter.drawText(100, dy, "window:" + painter.width + "x" + painter.height)
    painter.drawText(100, dy * 2, "paint:" + paintCount)
    painter.drawText(100, dy * 3, "update" + updateCount)
    if (isNaN(mouseX)) {
        painter.drawText(100, dy * 4, "x:---, y:---")
    } else {
        painter.drawText(100, dy * 4, "x:" + mouseX.toFixed(2) + ", y:" + mouseY.toFixed(2))
    }
    if (lastKey) {
        painter.drawText(100, dy * 5, "lastKey:" + lastKey)
    }

    painter.pen = "blue"
    painter.brush = "#00000000"
    painter.drawCircle(mouseX, mouseY, 10)
}

function onMouseDown(x, y, button) {
    console.log("onMouseDown!", x.toFixed(2), y.toFixed(2), button)
}

function onMouseUp(x, y, button) {
    console.log("onMouseUp!", x.toFixed(2), y.toFixed(2), button)
}

function onMouseMove(x, y) {
    if (isNaN(mouseX)) {
        console.log("onMouseMove! (first)", x.toFixed(2), y.toFixed(2))
    }

    mouseX = x
    mouseY = y
}

function onKeyDown(key) {
    console.log("onKeyDown!", key)
    live.showMessage("Key:" + key)
}

function onKeyUp(key) {
    console.log("onKeyUp!", key)
    lastKey = key
}
