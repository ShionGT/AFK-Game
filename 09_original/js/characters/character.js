class Character {

    // constructor to accept image, width, and height parameters
    constructor(spritesheet, width, height) {
        this.sprite = spritesheet;
        this.x = 0;
        this.y = 0;
        this.width = width;
        this.height = height;
        this.isVisible = true;
    }

    // constructor to accept x and y parameters
    constructor(spritesheet, x, y, width, height) {
        this.sprite = spritesheet;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isVisible = true;
    }

    /**
     * gets the x coordinate
     * @returns x
     */
    getX() {
        return this.x;
    }

    /**
     * gets the y coordinate
     * @returns y
     */
    getY() {
        return this.y;
    }

    /**
     * gets the width of the character
     * @returns width
     */
    getWidth() {
        return this.width;
    }

    /**
     * gets the height of the character
     * @returns height
     */
    getHeight() {
        return this.height;
    }


    update() {
        // Update character state (e.g., position, animation frame)
        throw new Error("Method 'update()' must be implemented.");
    }

    setAction(action) {
        this.sprite.setAction(action);
    }


    draw(ctx) {
        if (!this.isVisible) {
            return;
        }
        ctx.drawImage(this.sprite.getCurrentImage(), this.x, this.y, this.width, this.height);
    }
}

export { Character };
