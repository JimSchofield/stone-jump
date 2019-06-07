import Board, { Coords } from "../models/board";
import { Maybe } from '../util/_';
import State from './State';

const changeState = (property: string) => (value: any) => {
    State[property] = value;
}

/**
 * Board changers
 */
const changeBoard = changeState('gameBoard');

export const selectStone = (x: number, y: number) => {
    if (State.gameBoard.getStone)
    changeBoard(State.gameBoard.selectStone(x,y));
}
