//  Transmitter
basic.showString("SENDER")
input.setAccelerometerRange(AcceleratorRange.EightG)
radio.setGroup(56)
function on_forever() {
    led.toggle(4, 4)
    radio.sendNumber(input.acceleration(Dimension.Z))
}

//  radio.send_value("Z value", input.acceleration(Dimension.Z))
on_forever()
