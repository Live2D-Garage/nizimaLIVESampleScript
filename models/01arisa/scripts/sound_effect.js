console.log("sound effect")

let lastParams
function start(model) {
    for (let param of model.parameters) {
        console.log(param.name, param.id)
    }
    model.move({ Absolute: true, X: 0, Y: -0.5, Delay: 0 })
}

function update(model, params) {
    lastParams = params

    let value = params.LipSyncVolume
    let color = Live.rgba(0.8 + value, 0.8 + value, 0.8 + value, 1)
    model.multiplyColor = color
    if (value > 0.1) {
        model.move({ Absolute: true, X: 0, Y: Math.min(0, value - 0.5), Delay: 0.1 })
    } else {
        model.move({ Absolute: true, X: 0, Y: -0.5, Delay: 0.1 })

    }
}
