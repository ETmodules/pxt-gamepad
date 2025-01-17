//% color="#EEAA00" icon="\uf11b"
//% block="Gamepad"
namespace EtGamepad {

    let DELAY = 500
    let TIME: number = 0
    let PINPRESSED: number = 0

    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    pins.digitalWritePin(DigitalPin.P8, 1)
    pins.digitalWritePin(DigitalPin.P9, 1)
    pins.digitalWritePin(DigitalPin.P11, 1)
    pins.digitalWritePin(DigitalPin.P12, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 1)

    pins.setPull(DigitalPin.P0, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P16, PinPullMode.PullUp)

    //% block="set repeating time to $delay msec"
    //% block.loc.nl="stel herhaaltijd in op $delay msec"
    //% delay.defl=500
    export function buttonDelay(delay: number) {
        DELAY = delay
    }

    function buttonPin(button: Gamepad): number {
        let pin = 0;
        switch (button) {
            case Gamepad.Button1: pin = DigitalPin.P13; break;
            case Gamepad.Button2: pin = DigitalPin.P15; break;
            case Gamepad.Button3: pin = DigitalPin.P1; break;
            case Gamepad.Button4: pin = DigitalPin.P12; break;
            case Gamepad.Button5: pin = DigitalPin.P16; break;
            case Gamepad.Button6: pin = DigitalPin.P2; break;
            case Gamepad.Button7: pin = DigitalPin.P8; break;
            case Gamepad.Button8: pin = DigitalPin.P14; break;
            case Gamepad.Button9: pin = DigitalPin.P9; break;
            case Gamepad.Button10: pin = DigitalPin.P0; break;
            case Gamepad.Button11: pin = DigitalPin.P5; break;
            case Gamepad.Button12: pin = DigitalPin.P11; break;
        }
        return pin;
    }

    function checkButtonPressed(button: Gamepad) {
        let pin = buttonPin(button);
        if (pins.digitalReadPin(pin) == 1)
            return
        if (PINPRESSED == pin && TIME > input.runningTime())
            return
        TIME = input.runningTime() + DELAY
        PINPRESSED = pin
        radio.sendNumber(button)

        switch (button) {
            case Gamepad.Button1: if (EventGamepad1) EventGamepad1(); break;
            case Gamepad.Button2: if (EventGamepad2) EventGamepad2(); break;
            case Gamepad.Button3: if (EventGamepad3) EventGamepad3(); break;
            case Gamepad.Button4: if (EventGamepad4) EventGamepad4(); break;
            case Gamepad.Button5: if (EventGamepad5) EventGamepad5(); break;
            case Gamepad.Button6: if (EventGamepad6) EventGamepad6(); break;
            case Gamepad.Button7: if (EventGamepad7) EventGamepad7(); break;
            case Gamepad.Button8: if (EventGamepad8) EventGamepad8(); break;
            case Gamepad.Button9: if (EventGamepad9) EventGamepad9(); break;
            case Gamepad.Button10: if (EventGamepad10) EventGamepad10(); break;
            case Gamepad.Button11: if (EventGamepad11) EventGamepad11(); break;
            case Gamepad.Button12: if (EventGamepad12) EventGamepad12(); break;
        }
    }

    basic.forever(function () {
        for (let i = Gamepad.Button1; i <= Gamepad.Button12; i++)
            checkButtonPressed(i)
    })
}
