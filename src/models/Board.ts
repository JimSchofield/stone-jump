export interface cell {
    value: string;
    x: number;
    y: number;
}

export default class Board {
    _containerElement: HTMLElement;
    _grid:  cell[][] = [];

    constructor(boardString: string) {
        this._parseGrid(boardString);
    }

    _parseGrid(boardString: string) {
        this.grid = boardString.split(/\r?\n/)
            .filter(el => el !== "")
            .map((row, y) => {
                return row.split('')
                    .map((cell, x) => ({
                        value: cell,
                        x,
                        y,
                    }))
            });
    }

    set grid(val: cell[][]) {
        this._grid = val;
    }

    get grid(): cell[][] {
        return this._grid;
    }
}
