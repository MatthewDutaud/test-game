input.onLoudSound(function () {
    makerController.player1.press(ArcadeButton.A)
})
music.powerUp.play()
light.showAnimation(light.rainbowAnimation, 3000)
forever(function () {
    makerController.player1.setAnalog(ArcadeAnalogButton.LeftRight, input.acceleration(Dimension.X))
    makerController.player1.setAnalog(ArcadeAnalogButton.DownUp, input.acceleration(Dimension.Y))
})
