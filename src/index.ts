import './styles/main.scss';

import _, { Maybe } from './util/_';

import Board from "./models/board";
import Move from './models/Move';
import MoveList from './models/MoveList';
import { renderMyBoard, renderMyMoveList } from './render/render';
import State from './state/State';

const grid = `
xxx111xxx
xxx111xxx
xx11111xx
111111111
111101111
111111111
xx11111xx
xxx111xxx
xxx111xxx
`;

function renderAllTheThings() {
    Maybe.from(State)
        .get("gameBoard")
        .map(renderMyBoard);

    Maybe.from(State)
        .getPath("possibleMoves.moves")
        .map(renderMyMoveList);
}

State.registerRenderFunction(renderAllTheThings);
State.gameBoard = new Board(grid);
State.possibleMoves = new MoveList();

document.querySelector('.board').addEventListener('click', event => {
    let {x, y} = (event.target as HTMLElement).dataset;
    if (x && y) {
        State.gameBoard = State.gameBoard.selectStone(x,y);
    }
})
