console.log("sound effect")

function start() {
    for (let param of model.parameters) {
        console.log(param.name, param.id)
    }
    model.move({ Absolute: true, X: 0, Y: -0.5, Delay: 0 })
}

function update(params) {
    let value = params.LipSyncVolume
    let cv = Math.min(0.8 + value, 1)
    let color = Live.rgba(cv, cv, cv, 1)
    model.multiplyColor = color
    if (value > 0.1) {
        model.move({ Absolute: true, X: 0, Y: Math.min(-0.3, value - 0.5), Delay: 0.1 })
    } else {
        model.move({ Absolute: true, X: 0, Y: -0.5, Delay: 0.1 })
    }
}

function onDisable() {
    model.multiplyColor = Live.rgba(1, 1, 1, 1)
    model.move({ Absolute: true, X: 0, Y: -0.5, Delay: 0.1 })
}
