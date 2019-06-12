import './styles/main.scss';

import _, { Maybe } from './util/_';

import { BOARD_CONTAINER } from './constants';

import Board, { Cell } from "./models/board";
import MoveList from './models/MoveList';
import { renderMyBoard, renderMyMoveList, renderSelectedMoveList } from './render/render';
import State from './state/State';
import registerHandlers from './ui/handlers';
import { assembleCartesianJumpMoves, assembleCartesianFromSelected } from './logic/moveFilters';

const grid = `
xxx111xxx
xxx111xxx
xx11111xx
111111111
111101111
111111111
xx11110xx
xxx111xxx
xxx101xxx
`;

function renderAllTheThings() {
    Maybe.from(State)
        .get('gameBoard')
        .map(renderMyBoard);

    Maybe.from(State)
        .get('gameBoard')
        .map(assembleCartesianJumpMoves)
        .get('moves')
        .map(renderMyMoveList);

    Maybe.from(State)
        .getPath('gameBoard.grid')
        .map(board => board.flat().filter((cell: Cell) => cell.selected))
        .map(list => list.length > 0 ? list[0] : null) 
        .map(assembleCartesianFromSelected(State.gameBoard))
        .get('moves')
        .map(renderSelectedMoveList);
}

State.registerRenderFunction(renderAllTheThings);
State.gameBoard = new Board(grid);
State.possibleMoves = new MoveList();

registerHandlers();


