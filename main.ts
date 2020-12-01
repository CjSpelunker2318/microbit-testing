//  Transmitter
basic.showString("SENDER")
//  input.set_accelerometer_range(AcceleratorRange.EIGHT_G)
radio.setGroup(56)
basic.forever(function on_forever() {
    led.toggle(4, 4)
    radio.sendNumber(input.acceleration(Dimension.X))
    radio.sendNumber(input.acceleration(Dimension.Y))
    radio.sendNumber(input.acceleration(Dimension.Z))
    basic.pause(300)
})
