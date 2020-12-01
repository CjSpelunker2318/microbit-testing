# Transmitter
basic.show_string("SENDER")
input.set_accelerometer_range(AcceleratorRange.EIGHT_G)
radio.set_group(787)

def on_forever():
    led.toggle(4, 4)
    radio.send_number(input.acceleration(Dimension.Z))
    # radio.send_value("Z value", input.acceleration(Dimension.Z))
on_forever()


