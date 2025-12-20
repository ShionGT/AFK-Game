class SpriteSheet {
    constructor(filename, rows, cols, frameWidth, frameHeight) {
        this.rows = rows;
        this.cols = cols;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;

        this.image = new Image();
        this.image.src = filename;

        this.currentAction = null;

        this.tick = 0;
        this.tickLimit = 8;
    }

    setAction(action) {
        if (!this.currentAction || this.currentAction.name !== action.name) {
            this.currentAction = action;
            this.currentAction.reset();
        }
    }

    update() {
        if (!this.currentAction) return;

        this.tick++;
        if (this.tick >= this.tickLimit) {
            this.tick = 0;
            this.currentAction.next();
        }
    }

    draw(ctx, x, y, width, height) {
        if (!this.currentAction) return;

        const sx = this.currentAction.getCol() * this.frameWidth;
        const sy = this.currentAction.getRow() * this.frameHeight;

        ctx.drawImage(
            this.image,
            sx, sy,
            this.frameWidth, this.frameHeight,
            x, y,
            width, height
        );
    }
}


class Action {
    constructor(name, row, colStart, colEnd, loop = true) {
        this.name = name;
        this.row = row;
        this.colStart = colStart;
        this.colEnd = colEnd;
        this.loop = loop;

        this.currentCol = colStart;
    }

    reset() {
        this.currentCol = this.colStart;
    }

    next() {
        if (this.currentCol < this.colEnd) {
            this.currentCol++;
        } else if (this.loop) {
            this.currentCol = this.colStart;
        }
    }

    getRow() {
        return this.row;
    }

    getCol() {
        return this.currentCol;
    }
}

export { SpriteSheet, Action };
