import MoveList from "../models/MoveList";
import Geometry, { cartesian } from '../models/Geometry';
import Board from "../models/board";
import Move from "../models/Move";

export const assembleMovesList = (geometry: Geometry) => (distance: number) => (board: Board): MoveList => {
    return new MoveList([new Move(1,2,3,4)]);
}

export const assembleCartesianJumpMoves = assembleMovesList(cartesian)(2);

