export interface Cell {
    value: string;
    x: number;
    y: number;
    selected: boolean;
    highlighted: boolean;
}

export interface Coords {
    x: number;
    y: number;
}

export default class Board {
    _containerElement: HTMLElement;
    _grid: Cell[][] = [];

    constructor(boardString: string = '') {
        this._parseGrid(boardString);
    }

    static fromGrid(grid: Cell[][]): Board {
        const newBoard = new Board();
        newBoard.grid = grid;
        return newBoard;
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
                        selected: false,
                        highlighted: false,
                    }))
            });
    }

    set grid(val: Cell[][]) {
        this._grid = val;
    }

    get grid(): Cell[][] {
        return this._grid;
    }

    getStone(x: number, y: number): Cell {
        return this._grid[y][x];
    }

    removeStone(x: number, y: number): Board {
        this._grid[y][x].value = "0";
        return Board.fromGrid(this.grid);
    }

    selectStone(x: number, y: number): Board {
        this._grid.forEach(row => row.forEach(stone => stone.selected = false));
        this.getStone(x, y).selected = true;
        return Board.fromGrid(this.grid);
    }
}


export const getSelected = (grid: Cell[][]): Cell => {
    return grid.flat(2).find(el => el.selected);
}

export const clearHighlighted = (grid: Cell[][]) => {

}