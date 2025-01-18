//% color="#EEAA00" icon="\uf11b"
//% block="Gamepad"
namespace EtGamepad {

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

    let GROUP = Group.Group1

    export enum Gamepad {
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

    let PRESSED1 = false
    let PRESSED2 = false
    let PRESSED3 = false
    let PRESSED4 = false
    let PRESSED5 = false
    let PRESSED6 = false
    let PRESSED7 = false
    let PRESSED8 = false
    let PRESSED9 = false
    let PRESSED10 = false
    let PRESSED11 = false
    let PRESSED12 = false

    type gamepadHandler = () => void

    let EventPressed1: gamepadHandler
    let EventPressed2: gamepadHandler
    let EventPressed3: gamepadHandler
    let EventPressed4: gamepadHandler
    let EventPressed5: gamepadHandler
    let EventPressed6: gamepadHandler
    let EventPressed7: gamepadHandler
    let EventPressed8: gamepadHandler
    let EventPressed9: gamepadHandler
    let EventPressed10: gamepadHandler
    let EventPressed11: gamepadHandler
    let EventPressed12: gamepadHandler

    let EventReleased1: gamepadHandler
    let EventReleased2: gamepadHandler
    let EventReleased3: gamepadHandler
    let EventReleased4: gamepadHandler
    let EventReleased5: gamepadHandler
    let EventReleased6: gamepadHandler
    let EventReleased7: gamepadHandler
    let EventReleased8: gamepadHandler
    let EventReleased9: gamepadHandler
    let EventReleased10: gamepadHandler
    let EventReleased11: gamepadHandler
    let EventReleased12: gamepadHandler

    export function handleEventPressed(button: Gamepad) {
        switch (button) {
            case Gamepad.Button1: PRESSED1 = true; if (EventPressed1) EventPressed1(); break;
            case Gamepad.Button2: PRESSED2 = true; if (EventPressed2) EventPressed2(); break;
            case Gamepad.Button3: PRESSED3 = true; if (EventPressed3) EventPressed3(); break;
            case Gamepad.Button4: PRESSED4 = true; if (EventPressed4) EventPressed4(); break;
            case Gamepad.Button5: PRESSED5 = true; if (EventPressed5) EventPressed5(); break;
            case Gamepad.Button6: PRESSED6 = true; if (EventPressed6) EventPressed6(); break;
            case Gamepad.Button7: PRESSED7 = true; if (EventPressed7) EventPressed7(); break;
            case Gamepad.Button8: PRESSED8 = true; if (EventPressed8) EventPressed8(); break;
            case Gamepad.Button9: PRESSED9 = true; if (EventPressed9) EventPressed9(); break;
            case Gamepad.Button10: PRESSED10 = true; if (EventPressed10) EventPressed10(); break;
            case Gamepad.Button11: PRESSED11 = true; if (EventPressed11) EventPressed11(); break;
            case Gamepad.Button12: PRESSED12 = true; if (EventPressed12) EventPressed12(); break;
        }
    }

    export function handleEventReleased(button: Gamepad) {
        switch (button) {
            case Gamepad.Button1: PRESSED1 = false; if (EventReleased1) EventReleased1(); break;
            case Gamepad.Button2: PRESSED2 = false; if (EventReleased2) EventReleased2(); break;
            case Gamepad.Button3: PRESSED3 = false; if (EventReleased3) EventReleased3(); break;
            case Gamepad.Button4: PRESSED4 = false; if (EventReleased4) EventReleased4(); break;
            case Gamepad.Button5: PRESSED5 = false; if (EventReleased5) EventReleased5(); break;
            case Gamepad.Button6: PRESSED6 = false; if (EventReleased6) EventReleased6(); break;
            case Gamepad.Button7: PRESSED7 = false; if (EventReleased7) EventReleased7(); break;
            case Gamepad.Button8: PRESSED8 = false; if (EventReleased8) EventReleased8(); break;
            case Gamepad.Button9: PRESSED9 = false; if (EventReleased9) EventReleased9(); break;
            case Gamepad.Button10: PRESSED10 = false; if (EventReleased10) EventReleased10(); break;
            case Gamepad.Button11: PRESSED11 = false; if (EventReleased11) EventReleased11(); break;
            case Gamepad.Button12: PRESSED12 = false; if (EventReleased12) EventReleased12(); break;
        }
    }

    //% block="join %group"
    //% block.loc.nl="sluit aan bij %group"
    export function setGroup(group: Group) {
        GROUP = group + 1
        radio.setGroup(GROUP)
    }

    //% block="%button is up"
    //% block.loc.nl="%button is losgelaten"
    export function isReleased(button: Gamepad): boolean {
        switch (button) {
            case Gamepad.Button1: return !PRESSED1;
            case Gamepad.Button2: return !PRESSED2;
            case Gamepad.Button3: return !PRESSED3;
            case Gamepad.Button4: return !PRESSED4;
            case Gamepad.Button5: return !PRESSED5;
            case Gamepad.Button6: return !PRESSED6;
            case Gamepad.Button7: return !PRESSED7;
            case Gamepad.Button8: return !PRESSED8;
            case Gamepad.Button9: return !PRESSED9;
            case Gamepad.Button10: return !PRESSED10;
            case Gamepad.Button11: return !PRESSED11;
            case Gamepad.Button12: return !PRESSED12;
        }
        return false;
    }

    //% block="%button is down"
    //% block.loc.nl="%button is ingedrukt"
    export function isPressed(button: Gamepad): boolean {
        switch (button) {
            case Gamepad.Button1: return PRESSED1;
            case Gamepad.Button2: return PRESSED2;
            case Gamepad.Button3: return PRESSED3;
            case Gamepad.Button4: return PRESSED4;
            case Gamepad.Button5: return PRESSED5;
            case Gamepad.Button6: return PRESSED6;
            case Gamepad.Button7: return PRESSED7;
            case Gamepad.Button8: return PRESSED8;
            case Gamepad.Button9: return PRESSED9;
            case Gamepad.Button10: return PRESSED10;
            case Gamepad.Button11: return PRESSED11;
            case Gamepad.Button12: return PRESSED12;
        }
        return false;
    }

    //% block="when %button is released"
    //% block.loc.nl="wanneer %button wordt losgelaten"
    export function onButtonReleased(button: Gamepad, programmableCode: () => void): void {
        switch (button) {
            case Gamepad.Button1: EventReleased1 = programmableCode; break;
            case Gamepad.Button2: EventReleased2 = programmableCode; break;
            case Gamepad.Button3: EventReleased3 = programmableCode; break;
            case Gamepad.Button4: EventReleased4 = programmableCode; break;
            case Gamepad.Button5: EventReleased5 = programmableCode; break;
            case Gamepad.Button6: EventReleased6 = programmableCode; break;
            case Gamepad.Button7: EventReleased7 = programmableCode; break;
            case Gamepad.Button8: EventReleased8 = programmableCode; break;
            case Gamepad.Button9: EventReleased9 = programmableCode; break;
            case Gamepad.Button10: EventReleased10 = programmableCode; break;
            case Gamepad.Button11: EventReleased11 = programmableCode; break;
            case Gamepad.Button12: EventReleased12 = programmableCode; break;
        }
    }

    //% block="when %button is pressed"
    //% block.loc.nl="wanneer op %button gedrukt"
    export function onButtonPressed(button: Gamepad, programmableCode: () => void): void {
        switch (button) {
            case Gamepad.Button1: EventPressed1 = programmableCode; break;
            case Gamepad.Button2: EventPressed2 = programmableCode; break;
            case Gamepad.Button3: EventPressed3 = programmableCode; break;
            case Gamepad.Button4: EventPressed4 = programmableCode; break;
            case Gamepad.Button5: EventPressed5 = programmableCode; break;
            case Gamepad.Button6: EventPressed6 = programmableCode; break;
            case Gamepad.Button7: EventPressed7 = programmableCode; break;
            case Gamepad.Button8: EventPressed8 = programmableCode; break;
            case Gamepad.Button9: EventPressed9 = programmableCode; break;
            case Gamepad.Button10: EventPressed10 = programmableCode; break;
            case Gamepad.Button11: EventPressed11 = programmableCode; break;
            case Gamepad.Button12: EventPressed12 = programmableCode; break;
        }
    }

}

radio.onReceivedNumber(function (receivedNumber: number) {
    if (receivedNumber > EtGamepad.Gamepad.Button12) {
        receivedNumber -= EtGamepad.Gamepad.Button12
        EtGamepad.handleEventReleased(receivedNumber)
    }
    else
        EtGamepad.handleEventPressed(receivedNumber)
    basic.showNumber(receivedNumber)
})
