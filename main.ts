//  Transmitter
basic.showString("SENDER")
//  input.set_accelerometer_range(AcceleratorRange.EIGHT_G)
radio.setGroup(56)
//  radio.send_value("Z value", input.acceleration(Dimension.Z))
basic.forever(function on_forever() {
    led.toggle(4, 4)
    radio.sendNumber(input.acceleration(Dimension.Z))
    basic.pause(500)
})
