// Moving the bird up
input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
// moving the bird down
// r
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let emptyObstacleY = 0
let bird: game.LedSprite = null
let ticks = 0
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
let obstacles: game.LedSprite[] = []
basic.forever(function () {
    // remove the pipe at the end of the screen
    // 
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    // Moving the pipes to the left
    for (let obstacle of obstacles) {
        obstacle.change(LedSpriteProperty.X, -1)
    }
    // only have pipes every 3 ticks
    // 
    if (ticks % 3 == 0) {
        // random hole location
        // 
        emptyObstacleY = randint(0, 4)
        for (let index = 0; index <= 4; index++) {
            if (index != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index))
            }
        }
    }
    for (let obstacle of obstacles) {
        if (obstacle.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
