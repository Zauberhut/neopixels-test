let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB_RGB)
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    strip.rotate(Math.map(input.acceleration(Dimension.X), 0, 1023, 0, 4))
    strip.show()
})
