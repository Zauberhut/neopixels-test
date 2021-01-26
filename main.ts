input.calibrateCompass()
let range = 120
let strip = neopixel.create(DigitalPin.P0, range, NeoPixelMode.RGB)
strip.setBrightness(255)
let Position = range / 2
basic.forever(function () {
    strip.clear()
    strip.setPixelColor(Position, neopixel.colors(NeoPixelColors.Red))
    if (input.isGesture(Gesture.TiltLeft)) {
        Position += 1
    }
    if (input.isGesture(Gesture.TiltRight)) {
        Position += -1
    }
    strip.show()
    basic.pause(10)
})
