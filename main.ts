//  Transmitter
basic.showString("Z-SENDER")
input.setAccelerometerRange(AcceleratorRange.EightG)
radio.setGroup(1)
function on_forever() {
    radio.sendNumber(input.acceleration(Dimension.Z))
}

on_forever()
