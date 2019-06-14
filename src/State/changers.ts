import Board, { Coords, getSelected, Cell } from "../models/board";
import { Maybe } from '../util/_';
import State from './State';
import MoveList from "../models/MoveList";
import Move from "../models/Move";
import { assembleCartesianMovesFromSelected } from "../logic/moveFilters";

const changeState = (property: string) => (value: any) => {
    State[property] = value;
}

/**
 * Board changers
 */
const changeBoard = changeState('gameBoard');

export const selectStone = (x: number, y: number) => {
    if (State.gameBoard.getStone(x,y).value === "1") {
        changeBoard(State.gameBoard.selectStone(x,y));
    }
}

export const highlightValidMoves = (x: number, y: number): void => {
    //clear board highlights
    Maybe.from(State)
        .get('gameBoard.grid')
        .map(console.log)
        .map(grid => grid.forEach((row: Cell[]) => row.forEach((cell: Cell) => cell.highlighted = false)));

    Maybe.from(State)
        .getPath('gameBoard.grid')
        .map(getSelected)
        .map(assembleCartesianMovesFromSelected(State.gameBoard))
        .map((moveList: MoveList) => {
                moveList.moves.forEach((move: Move) => {
                    const { x, y } = move.to;
                    State.gameBoard.grid[y][x].highlighted = true;
                });
            });

    // Have to rethink this...
    changeBoard(State.gameBoard);
}