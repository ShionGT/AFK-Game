import { Character } from "./Character.js";

class Chef extends Character {
    constructor(sprite, x, y, width, height) {
        super(sprite, x, y, width, height);

        this.foodTimer = 0;
        this.foodInterval = 2000; // every 2 seconds
        this.foodPerTick = 1;
        this.onFoodProduced = null;
    }

    setFoodCallback(callback) {
        this.onFoodProduced = callback;
    }

    update(deltaTime) {
        // Animate sprite
        this.sprite.update();

        // Produce food over time
        this.foodTimer += deltaTime;
        if (this.foodTimer >= this.foodInterval) {
            this.foodTimer = 0;

            if (this.onFoodProduced) {
                this.onFoodProduced(this.foodPerTick);
            }
        }
    }
}

export { Chef };
