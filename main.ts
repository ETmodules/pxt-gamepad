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

    export enum Button {
        //% block="black-top"
        //% block.loc.nl="zwart-boven"
        Button1, //P13
        //% block="black-bottom"
        //% block.loc.nl="zwart-onder"
        Button2, //P15 
        //% block="black-left"
        //% block.loc.nl="zwart-links"
        Button3, //P1
        //% block="black-right"
        //% block.loc.nl="zwart-rechts"
        Button4, //P12
        //% block="white-top"
        //% block.loc.nl="wit-boven"
        Button5, //p16
        //% block="white-bottom"
        //% block.loc.nl="wit-onder"
        Button6, //P2
        //% block="white-left"
        //% block.loc.nl="wit-links"
        Button7, //P8
        //% block="white-right"
        //% block.loc.nl="wit-rechts"
        Button8, //P14
        //% block="yellow-top"
        //% block.loc.nl="geel-boven"
        Button9, //P9
        //% block="yellow-bottom"
        //% block.loc.nl="geel-onder"
        Button10, //P0
        //% block="blue"
        //% block.loc.nl="blauw"
        Button11, //P5
        //% block="red"
        //% block.loc.nl="rood"
        Button12 //P11
    }

    export enum Group {
        //% block="group 1"
        //% block.loc.nl="groep 1"
        Group1,
        //% block="group 2"
        //% block.loc.nl="groep 2"
        Group2,
        //% block="group 3"
        //% block.loc.nl="groep 3"
        Group3,
        //% block="group 4"
        //% block.loc.nl="groep 4"
        Group4,
        //% block="group 5"
        //% block.loc.nl="groep 5"
        Group5,
        //% block="group 6"
        //% block.loc.nl="groep 6"
        Group6,
        //% block="group 7"
        //% block.loc.nl="groep 7"
        Group7,
        //% block="group 8"
        //% block.loc.nl="groep 8"
        Group8,
        //% block="group 9"
        //% block.loc.nl="groep 9"
        Group9
    }

    let GROUP = 0

    export type gamepadHandler = () => void

    let EventGamepad1: gamepadHandler
    let EventGamepad2: gamepadHandler
    let EventGamepad3: gamepadHandler
    let EventGamepad4: gamepadHandler
    let EventGamepad5: gamepadHandler
    let EventGamepad6: gamepadHandler
    let EventGamepad7: gamepadHandler
    let EventGamepad8: gamepadHandler
    let EventGamepad9: gamepadHandler
    let EventGamepad10: gamepadHandler
    let EventGamepad11: gamepadHandler
    let EventGamepad12: gamepadHandler

    //% block="set repeating time to $delay msec"
    //% block.loc.nl="stel herhaaltijd in op $delay msec"
    //% delay.defl=500
    export function buttonDelay(delay: number) {
        DELAY = delay
    }

    //% block="when %button is pressed on gamepad"
    //% block.loc.nl="wanneer op de gamepad %button wordt ingedrukt"
    export function onButtonPressed(button: Button, programmableCode: () => void): void {
        switch (button) {
            case Button.Button1: EventGamepad1 = programmableCode; break;
            case Button.Button2: EventGamepad2 = programmableCode; break;
            case Button.Button3: EventGamepad3 = programmableCode; break;
            case Button.Button4: EventGamepad4 = programmableCode; break;
            case Button.Button5: EventGamepad5 = programmableCode; break;
            case Button.Button6: EventGamepad6 = programmableCode; break;
            case Button.Button7: EventGamepad7 = programmableCode; break;
            case Button.Button8: EventGamepad8 = programmableCode; break;
            case Button.Button9: EventGamepad9 = programmableCode; break;
            case Button.Button10: EventGamepad10 = programmableCode; break;
            case Button.Button11: EventGamepad11 = programmableCode; basic.showNumber(button); break;
            case Button.Button12: EventGamepad12 = programmableCode; break;
        }
    }

    //% block="join %group"
    //% block.loc.nl="sluit aan bij %group"
    export function setGroup(group: Group) {
        GROUP = group + 1
        radio.setGroup(GROUP)
    }

    function buttonPin(button: Button): number {
        let pin = 0;
        switch (button) {
            case Button.Button1: pin = DigitalPin.P13; break;
            case Button.Button2: pin = DigitalPin.P15; break;
            case Button.Button3: pin = DigitalPin.P1; break;
            case Button.Button4: pin = DigitalPin.P12; break;
            case Button.Button5: pin = DigitalPin.P16; break;
            case Button.Button6: pin = DigitalPin.P2; break;
            case Button.Button7: pin = DigitalPin.P8; break;
            case Button.Button8: pin = DigitalPin.P14; break;
            case Button.Button9: pin = DigitalPin.P9; break;
            case Button.Button10: pin = DigitalPin.P0; break;
            case Button.Button11: pin = DigitalPin.P5; break;
            case Button.Button12: pin = DigitalPin.P11; break;
        }
        return pin;
    }

    function checkButtonPressed(button: Button) {
        let pin = buttonPin(button);
        if (pins.digitalReadPin(pin) == 1)
            return
        if (PINPRESSED == pin && TIME > input.runningTime())
            return
        TIME = input.runningTime() + DELAY
        PINPRESSED = pin
        radio.sendNumber(button)

        switch (button) {
            case Button.Button1: if (EventGamepad1) EventGamepad1; break;
            case Button.Button2: if (EventGamepad2) EventGamepad2; break;
            case Button.Button3: if (EventGamepad3) EventGamepad3; break;
            case Button.Button4: if (EventGamepad4) EventGamepad4; break;
            case Button.Button5: if (EventGamepad5) EventGamepad5; break;
            case Button.Button6: if (EventGamepad6) EventGamepad6; break;
            case Button.Button7: if (EventGamepad7) EventGamepad7; break;
            case Button.Button8: if (EventGamepad8) EventGamepad8; break;
            case Button.Button9: if (EventGamepad9) EventGamepad9; break;
            case Button.Button10: if (EventGamepad10) EventGamepad10; break;
            case Button.Button11: if (EventGamepad11) EventGamepad11; break;
            case Button.Button12: if (EventGamepad12) EventGamepad12; break;
        }
    }

    basic.forever(function () {
        for (let i = Button.Button1; i <= Button.Button12; i++)
            checkButtonPressed(i)
    })
}
