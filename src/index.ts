import './styles/main.scss';

import Board from "./models/board";
import { renderBoard, renderMoveList } from './render/render';
import MoveList from './models/MoveList';
import Move from './models/Move';

const grid = `
xxx111xxx
xxx111xxx
xxx111xxx
111111111
111101111
111111111
xxx111xxx
xxx111xxx
xxx111xxx
`;

const state = {
    gameBoard: new Board(grid),
    possibleMoves: new MoveList(),
}

const renderMyBoard = (data) => renderBoard(
    document.querySelector('.board'),
    data
);

const renderMyMoveList = (data) => renderMoveList(
    document.querySelector('.move-list'),
    data,
);

renderMyBoard(state.gameBoard);
renderMyMoveList(state.possibleMoves.moves);
