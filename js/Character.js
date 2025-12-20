class Character {
    constructor(spritesheet, x = 0, y = 0, width, height) {
        this.sprite = spritesheet;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isVisible = true;
    }

    getX() { return this.x; }
    getY() { return this.y; }
    getWidth() { return this.width; }
    getHeight() { return this.height; }

    setAction(action) {
        this.sprite.setAction(action);
    }

    update(deltaTime) {
        this.sprite.update();
    }

    draw(ctx) {
        if (!this.isVisible) return;
        this.sprite.draw(ctx, this.x, this.y, this.width, this.height);
    }

}

export { Character };
