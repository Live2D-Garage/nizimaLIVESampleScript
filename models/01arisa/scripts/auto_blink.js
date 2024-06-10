console.log('auto_blink(60FPS)')
let single = true
let progress = 0
let end = 120
let lookX, lookY

function random(min, max) {
    return Math.random() * (max - min) + min
}

function update(params) {
    if (params.EyeOpenLeft > 0.8 && params.EyeOpenRight > 0.8) {
        lookX = params.EyeLookX
        lookY = params.EyeLookY
    }
    params.EyeLookX = lookX
    params.EyeLookY = lookY

    let value
    if (single) {
        if (progress < 0) value = 1
        else if (progress < 9) value = 1 - progress / 8
        else if (progress < 18) value = 1 - (17 - progress) / 8
        else value = 1
    } else {
        if (progress < 0) value = 1
        else if (progress < 9) value = 1 - progress / 8
        else if (progress < 14) value = 1 - (13 - progress) / 4
        else if (progress < 19) value = 1 - (progress - 14) / 4
        else if (progress < 28) value = 1 - (27 - progress) / 8
        else value = 1
    }
    progress++
    if (progress > end) {
        progress = 0
        if (single) {
            single = Math.random() < 0.8
            if (single) {
                end = random(120, 600)
            } else {
                end = random(120, 240)
            }
        } else {
            single = true
            end = random(300, 600)
        }
    }
    params.EyeOpenLeft = value
    params.EyeOpenRight = value
}
