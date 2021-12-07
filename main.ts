radio.onReceivedValue(function (name, value) {
    if (name == "stop") {
        basic.showIcon(IconNames.No)
    } else if (name == "forward") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, value)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, value)
    } else if (name == "reverse") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, value)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, value)
    } else if (name == "left") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, value)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, value)
    } else if (name == "right") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, value)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, value)
    }
})
basic.showIcon(IconNames.SmallSquare)
radio.setGroup(1)
