console.log("expression key")

function onKeyDown(key) {
    let num = parseInt(key)
    if (isNaN(num)) return
    num--
    if (num < 0 || num >= model.expressions.length) return
    model.expressions[num].start()
}

function onKeyUp(key) {
    let num = parseInt(key)
    if (isNaN(num)) return
    num--
    if (num < 0 || num >= model.expressions.length) return
    model.expressions[num].stop()
}
