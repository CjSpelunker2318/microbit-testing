# Transmitter (sender)
basic.show_string("SENDER")
radio.set_group(56)
input.calibrate_compass()

def on_forever():
    led.toggle(4, 4)
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    z = input.acceleration(Dimension.Z)
    radio.send_value("x", x)
    radio.send_value("y", y)
    radio.send_value("z", z)
    radio.send_value("xz", strength2D(x, z))
    radio.send_value("yz", strength2D(y, z))
    radio.send_value("degree", input.compass_heading())
    basic.pause(150)
basic.forever(on_forever)

# strength2D
def strength2D(a, b):
    return Math.sqrt(a**2 + b**2)