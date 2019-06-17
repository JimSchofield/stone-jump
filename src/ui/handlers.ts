import { selectStone, highlightValidMoves, doMove, clearBoard } from "../state/changers";
import { BOARD_CONTAINER } from "../constants";
import State from "../state/State";
import { getSelected } from "../models/board";
import { moveIsValid, assembleCartesianMovesFromSelected } from "../logic/moveFilters";
import { cartesian } from "../models/Geometry";
import Move from "../models/Move";
import MoveList from "../models/MoveList";

interface Handlers {
    [key: string]: () => void;
}

const handlers: Handlers = {
    registerBoardClicks():void {
        document.addEventListener('click', event => {
            let {x, y} = (event.target as HTMLElement).dataset;
            if (x && y) {
                // If a valid stone click...

                const selectedStone = getSelected(State.gameBoard.grid)
                let possibleMovesFromSelected: MoveList = null;
                if (selectedStone) {
                    possibleMovesFromSelected = assembleCartesianMovesFromSelected(State.gameBoard)(selectedStone);
                }
                
                // check if there's a selected stone and if this move is valid
                if (
                    possibleMovesFromSelected && 
                    possibleMovesFromSelected.moves.some(move => 
                        move.to.x === +x
                        &&
                        move.to.y === +y
                    )
                ) {
                    doMove(+x, +y);
                    clearBoard();
                } else {
                    // else, just select that stone
                    selectStone(+x,+y);
                    highlightValidMoves(+x,+y);
                }
            } else {
                // no stone click
                clearBoard();
            }
        })
    }
}

function registerHandlers(): void {
    Object.keys(handlers)
        .forEach((handlerName: string) => handlers[handlerName]());
}

export default registerHandlers;