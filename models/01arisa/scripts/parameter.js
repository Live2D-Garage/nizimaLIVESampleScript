console.log("parameter")


function paint(model, painter) {
    painter.clear()
    let dy = 15

    let i = 0
    for (let param of model.parameters) {
        let name = param.name || param.id
        painter.drawText(70, dy, name + " : " + param.value.toFixed(2))
        dy += 15
        i++
        if (i > 30) {
            painter.drawText(70, dy, "..." + (model.parameters.length - 30) + " more")
            break
        }
    }

    i = 0
    dy = 15
    for (let param of Live.currentParameters(model.id)) {
        painter.drawText(-200, dy, param.id + " : " + param.value.toFixed(2))
        dy += 15
        i++
        if (i > 30) {
            painter.drawText(-200, dy, "..." + (Object.keys(Live.parameters).length - 30) + " more")
            break
        }
    }
}

