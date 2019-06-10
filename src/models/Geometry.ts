/**
 * Geometry:
 * An interface for how the board knows what movements are possible on the board
 */

export default interface Geometry {
    [moveName: string]: (x: number, y: number) => { x: number, y: number }
}

export const cartesian: Geometry = {
    up: (x, y) => ({ x, y: y + 1 }),
    down: (x, y) => ({ x, y: y - 1 }),
    left: (x, y) => ({ x: x - 1, y }),
    right: (x, y) => ({ x: x + 1, y }),
}

// TODO: NEED TO TEST BELOW
export const hex: Geometry = {
    upLeft:(x, y) => ({ x: x - 1, y: y - 1 }),
    upRight: (x, y) => ({ x, y: y - 1 }),
    left: (x, y) => ({ x: x - 1, y }),
    right: (x, y) => ({ x: x + 1, y }),
    downLeft: (x, y) => ({ x, y: y + 1 }),
    downRight: (x, y) => ({ x: x + 1, y: y + 1 }),
}