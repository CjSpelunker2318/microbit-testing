# Transmitter
basic.show_string("Z-SENDER")
input.set_accelerometer_range(AcceleratorRange.EIGHT_G)
radio.set_group(1)

def on_forever():
    radio.send_number(input.acceleration(Dimension.Z))
    radio.send_value("Z value", input.acceleration(Dimension.Z))
on_forever()


