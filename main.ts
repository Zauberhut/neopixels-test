let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB_RGB)
strip.setBrightness(150)
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        strip.rotate(1)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        strip.rotate(-1)
    }
    strip.show()
})
