let range = 60
let strip = neopixel.create(DigitalPin.P1, range, NeoPixelMode.RGB_RGB)
strip.setBrightness(255)
let Position = range / 2
strip.showRainbow(1, 360)
strip.show()
basic.forever(function () {
    if (Position <= 0) {
        Position = 0
    }
    if (Position >= range) {
        Position = range - 1
    }
})
basic.forever(function () {
    strip.setPixelColor(Position, neopixel.colors(NeoPixelColors.Red))
    if (input.isGesture(Gesture.TiltLeft)) {
        Position += 1
    }
    if (input.isGesture(Gesture.TiltRight)) {
        Position += -1
    }
    strip.show()
    basic.pause(100)
})
