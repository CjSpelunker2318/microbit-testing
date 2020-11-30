//  Transmitter
basic.showString("SENDER")
input.setAccelerometerRange(AcceleratorRange.EightG)
radio.setGroup(1)
function on_forever() {
    radio.sendNumber(input.acceleration(Dimension.Z))
}

//  radio.send_value("Z value", input.acceleration(Dimension.Z))
on_forever()
