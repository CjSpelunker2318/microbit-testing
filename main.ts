//  Transmitter (sender)
basic.showString("SENDER")
radio.setGroup(56)
basic.forever(function on_forever() {
    led.toggle(4, 4)
    radio.sendValue("x", input.acceleration(Dimension.X))
    radio.sendValue("y", input.acceleration(Dimension.Y))
    radio.sendValue("z", input.acceleration(Dimension.Z))
    basic.pause(150)
})
//  Compass 
input.calibrateCompass()
basic.forever(function on_forever2() {
    radio.sendValue("degree", input.compassHeading())
    basic.pause(100)
})
