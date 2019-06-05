import _ from '../util/_';

import Board, { cell } from "../models/Board";
import MoveList from '../models/MoveList';
import Move from '../models/Move';

export const render = (template: (data: any) => string): (container: HTMLElement, data:any) => void => {
    return (container: HTMLElement, data: any) => {
        container.innerHTML = template(data);
    };
}

export const renderBoard = render((board: Board) => {
    function getCellClass(cell: cell): string {
        switch (true) {
            case cell.value === '0':
                return 'cell cell_empty'
                break;
            case cell.value === '1':
                return 'cell cell_filled'
                break;
            default:
                return 'cell cell_invalid';
                break;
        }
    }

    return `${_.mapDOM(board.grid, (row) =>
            `<div class="row">
                ${_.mapDOM(row, (cell) => (
                    `<div class="${getCellClass(cell)}">${cell.x},${cell.y}</div>`
                ))}
            </div>`
    )}`;
});

export const renderMoveList = render((moveList: Move[]) => {
    return `${_.mapDOM(moveList, (el: Move) => (
        `<p>(${el.fromX},${el.fromY}) => (${el.toX},${el.toY})</p>`
    ))}`;
});
