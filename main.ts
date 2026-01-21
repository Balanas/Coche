input.onButtonPressed(Button.A, function () {
    adelante()
    basic.pause(2000)
})
function derecha () {
    pins.analogWritePin(AnalogPin.P1, 900)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
    pins.analogWritePin(AnalogPin.P2, 900)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function adelante () {
    pins.analogWritePin(AnalogPin.P2, 900)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.analogWritePin(AnalogPin.P1, 900)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
function atras () {
    pins.analogWritePin(AnalogPin.P1, 900)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, 900)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function izquierda () {
    pins.analogWritePin(AnalogPin.P1, 900)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.analogWritePin(AnalogPin.P2, 900)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
led.enable(false)
pins.digitalWritePin(DigitalPin.P14, 1)
basic.forever(function () {
	
})
