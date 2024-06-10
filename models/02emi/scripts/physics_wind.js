console.log("physics_wind")
function update(params) {
    if (model.physics) {
        const angle = (Date.now() % 1000) / 1000 * 2 * Math.PI;
        model.physics.wind.x = (Math.sin(angle) + 1) / 2 * 0.5
    }
}
