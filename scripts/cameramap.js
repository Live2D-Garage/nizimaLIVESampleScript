console.log("cameramap script")

function update() {
    let params = model.liveParameters
    let layer = scene.effect.background.layer("CameraMap")
    if (layer) {
        layer.setParameter("zurashiX", - params.Yaw / 90 * 0.3)
        layer.setParameter("zurashiY", params.Pitch / 90 * 0.2)
    }
}