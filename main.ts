//  Transmitter (sender)
basic.showString("SENDER")
radio.setGroup(56)
input.calibrateCompass()
basic.forever(function on_forever() {
    led.toggle(4, 4)
    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)
    let z = input.acceleration(Dimension.Z)
    radio.sendValue("x", x)
    radio.sendValue("y", y)
    radio.sendValue("z", z)
    radio.sendValue("xz", strength2D(x, z))
    radio.sendValue("yz", strength2D(y, z))
    radio.sendValue("degree", input.compassHeading())
    basic.pause(150)
})
//  strength2D
function strength2D(a: number, b: number): number {
    return Math.sqrt(a ** 2 + b ** 2)
}

