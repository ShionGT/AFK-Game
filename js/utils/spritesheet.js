class SpriteSheet {
    constructor(filename, imageRow, imageCol, imageWidthm, imageHeight) {
        this.imageRow = imageRow;
        this.imageCol = imageCol;
        this.imageWidthm = imageWidthm;
        this.imageHeight = imageHeight;
        this.#image.src = this.filename;
    }

    #tick = 0;
    #tickLimit = 5 // how many updates before frame change
    #colIndex = 0;
    #rowIndex = 0;
    #image = new Image();

    setAction(action) {
        // Implementation for setting action
        console.log(`Action set to: ${action}`);
    }

    #moveToNext() {
        // Implementation for moving to next frame
        console.log("Moving to next frame");
        if (this.#colIndex < this.imageCol - 1) {
            this.#colIndex++;
        } else {
            this.#colIndex = 0;
            if (this.#rowIndex < this.imageRow - 1) {
                this.#rowIndex++;
            } else {
                this.#rowIndex = 0;
            }
        }

    }


    update() {
        // Implementation for updating sprite sheet
        this.#tick++;
        if (this.#tick > this.#tickLimit) {
            this.#tick = 0;
            this.#moveToNext();
        }
    }

    getCurrrentImage() {
        // Implementation for getting current image
        console.log("Getting current image");
        return null; // Placeholder return
    }

}


class Action {
    constructor(name, rowIndex, rowStart, rowEnd, rowMax, colStart, colEnd, colMax) {
        this.name = name;
        this.rowIndex = rowIndex;
        this.rowStart = rowStart;
        this.rowEnd = rowEnd;
        this.rowMax = rowMax;
        this.colStart = colStart;
        this.colEnd = colEnd;
        this.colMax = colMax;
    }

    // set initial current position
    #currentCol = this.colStart;
    #currentRow = this.rowIndex;

    // TODO: implement method to move to next frame in action, finish condtion satements
    next() {
        // Implementation for moving to next frame in action
        if (this.#currentCol == this.colEnd && this.#currentRow < this.rowEnd) {
            this.#currentRow++;
        }
        else if (this.#currentCol < this.colEnd && this.#currentRow < this.rowMax) {
            this.#currentRow++;
        }else if (this.rowMax <= this.#currentRow && this.#currentCol < this.colEnd) {
            this.#currentCol++;
            this.#currentRow = 0;
        } else if (this.#currentCol < this.colMax && (this.#currentRow == this.rowEnd || this.#currentRow >= this.rowMax)) {
            this.#currentCol = this.colStart;
        }
    }

    getName() {
        return this.name;
    }

    getRowIndex() {
        return this.rowIndex;
    }

    getRowStart() {
        return this.rowStart;
    }

    getRowEnd() {
        return this.rowEnd;
    }

    getColStart() {
        return this.colStart;
    }

    getColEnd() {
        return this.colEnd;
    }
}
