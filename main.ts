controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    storybreake += 1
})
let oldman: Sprite = null
let happyhomes: Sprite = null
let storystart = 0
let storybreake = 0
scene.setBackgroundImage(assets.image`setting fast`)
let youngmanwithflag = sprites.create(assets.image`guyWhoFreezesToDeath`, SpriteKind.Player)
youngmanwithflag.setPosition(-5, -4)
forever(function () {
    if (storybreake == 1) {
        scene.setBackgroundImage(assets.image`vilage out scrttes`)
        youngmanwithflag.setVelocity(50, -2)
        youngmanwithflag.setPosition(17, 97)
        youngmanwithflag.sayText("Excelsior!")
        pause(3000)
    } else if (storybreake > 2) {
        youngmanwithflag.setPosition(19, 101)
        happyhomes = sprites.create(assets.image`happyhome`, SpriteKind.Player)
        happyhomes.setPosition(16, 45)
        happyhomes = sprites.create(assets.image`happyhome`, SpriteKind.Player)
        happyhomes.setPosition(62, 45)
        happyhomes = sprites.create(assets.image`happyhome`, SpriteKind.Player)
        happyhomes.setPosition(121, 45)
        pause(1000)
        youngmanwithflag.setVelocity(50, -2)
        pause(200)
    } else if (storybreake > 3) {
        oldman = sprites.create(assets.image`oldManWhoDoesntFreezeToDeath`, SpriteKind.Player)
        oldman.setPosition(53, 101)
    }
})
