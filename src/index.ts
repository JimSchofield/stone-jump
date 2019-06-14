import './styles/main.scss';

import _, { Maybe } from './util/_';

import registerHandlers from './ui/handlers';
import { assembleCartesianJumpMoves, assembleCartesianMovesFromSelected } from './logic/moveFilters';
import Board, { getSelected } from "./models/board";
import MoveList from './models/MoveList';
import { renderMyBoard, renderMyMoveList, renderSelectedMoveList } from './render/render';
import State from './state/State';


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

registerHandlers();


