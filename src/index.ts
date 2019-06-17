import './styles/main.scss';

import _, { Maybe } from './util/_';

import registerHandlers from './ui/handlers';
import { assembleCartesianJumpMoves, assembleCartesianMovesFromSelected } from './logic/moveFilters';
import Board, { getSelected } from "./models/board";
import MoveList from './models/MoveList';
import { renderMyBoard, renderMyMoveList, renderSelectedMoveList } from './render/render';
import State from './state/State';


const grid = `
xx111xx
xx111xx
1111111
1110111
1111111
xx111xx
xx111xx
`;

function renderAllTheThings() {
    
    Maybe.from(State)
        .get('gameBoard')
        .map(assembleCartesianJumpMoves)
        .get('moves')
        .map(renderMyMoveList);
        
    Maybe.from(State)
        .getPath('gameBoard.grid')
        .map(getSelected)
        .map(assembleCartesianMovesFromSelected(State.gameBoard))
        .get('moves')
        .map(renderSelectedMoveList);
    
    Maybe.from(State)
        .get('gameBoard')
        .map(renderMyBoard);
}

State.registerRenderFunction(renderAllTheThings);
State.gameBoard = new Board(grid);
State.possibleMoves = new MoveList();
State.possibleMovesFromSelected = []

registerHandlers();


