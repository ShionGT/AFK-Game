import { Character } from "./Character.js";
import { SpriteSheet, Action } from "./SpriteSheet.js";
import { Chef } from "./Cat.js";

/* =========================
   Canvas setup
========================= */
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

/* =========================
   Game state
========================= */
const game = {
    lastTime: 0,
    accumulator: 0,
    frameTime: 1000 / 40, // 40 FPS
    characters: [],
    food: 0
};

/* =========================
   Sprite setup
========================= */
const catSprite = new SpriteSheet(
    "./assets/cat.png",
    4, 6,
    32, 32
);

const IDLE = new Action("idle", 0, 0, 3);
const COOK = new Action("cook", 2, 0, 5);

/* =========================
   Create Chef cat
========================= */
const chef = new Chef(
    catSprite,
    350,
    350,
    48,
    48
);

chef.setAction(COOK);
chef.setFoodCallback((amount) => {
    game.food += amount;
});

game.characters.push(chef);

/* =========================
   Game loop (FPS capped)
========================= */
function gameLoop(timestamp) {
    if (!game.lastTime) game.lastTime = timestamp;

    const delta = timestamp - game.lastTime;
    game.lastTime = timestamp;
    game.accumulator += delta;

    while (game.accumulator >= game.frameTime) {
        update(game.frameTime);
        game.accumulator -= game.frameTime;
    }

    draw();
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

/* =========================
   Update & Draw
========================= */
function update(deltaTime) {
    for (const c of game.characters) {
        c.update(deltaTime);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#cce7b0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ground
    ctx.fillStyle = "#88b27b";
    ctx.fillRect(0, canvas.height - 120, canvas.width, 120);

    // Characters
    for (const c of game.characters) {
        c.draw(ctx);
    }

    // UI
    ctx.fillStyle = "#333";
    ctx.font = "16px sans-serif";
    ctx.fillText(`🍲 Food: ${Math.floor(game.food)}`, 10, 24);
    ctx.fillText("FPS: ~40", 10, 44);
}
