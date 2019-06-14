import { Maybe } from '../util/_';

import MoveList from "../models/MoveList";
import Geometry, { cartesian } from '../models/Geometry';
import Board, { Cell } from "../models/board";
import Move from "../models/Move";


export const moveIsValid = (moveFunc: (x: number, y: number) => { x: number, y: number }) =>
    (board: Board) =>
        (position: { x: number, y: number }): boolean => {
            const { x: toX, y: toY } = moveFunc(position.x, position.y);
            const { x: toToX, y: toToY } = moveFunc(toX, toY);

            const nextCell = Maybe.from(board)
                .get(`grid`)
                .get(`${toY}`)
                .get(`${toX}`)
                .get(`value`)
                .join() as unknown as string;
            const nextNextCell = Maybe.from(board)
                .get(`grid`)
                .get(`${toToY}`)
                .get(`${toToX}`)
                .get(`value`)
                .join() as unknown as string;
            if (nextCell === "1" && nextNextCell === "0") {
                return true;
            }

            return false;
        }

export const assembleMovesList = (geometry: Geometry) => (board: Board): MoveList => {
    const moves = Object.keys(geometry).map(moveName => {
        return board.grid.map(row => {
            return row.map(cell => {
                if (cell.value === "1") {
                    if (moveIsValid(geometry[moveName])(board)(cell)) {
                        const { x: toX, y: toY } = geometry[moveName](cell.x, cell.y);
                        return new Move({ x: cell.x, y: cell.y }, geometry[moveName](toX, toY));
                    }
                }
            })
        })
    });

    const flattenedMoves = moves.flat(2).filter(el => typeof el !== 'undefined');

    return new MoveList(flattenedMoves);
}

export const assembleMovesFromSelected = (geometry: Geometry) => (board: Board) => (selectedStone: { x: number, y: number }) => {
    const { x, y } = selectedStone;
    const moves = new MoveList(
        Object.values(geometry).map(moveFunc => {
            if (moveIsValid(moveFunc)(board)(selectedStone)) {
                const { x: toX, y: toY } = moveFunc(x, y);
                return new Move(selectedStone, moveFunc(toX, toY))
            }
        })
    );

    const filteredMoves = moves.moves.filter(move => typeof move !== 'undefined');

    return new MoveList(filteredMoves);
}

export const assembleCartesianMovesFromSelected = assembleMovesFromSelected(cartesian);

export const assembleCartesianJumpMoves = assembleMovesList(cartesian);

