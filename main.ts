let posX = 0
let posY = 0
led.plot(posX, posY)
basic.forever(function () {
    led.unplot(posX, posY)
    posY += 1
    led.plot(posX, posY)
    if (true) {
    	
    }
    led.plotBrightness(0, 0, 255)
})
