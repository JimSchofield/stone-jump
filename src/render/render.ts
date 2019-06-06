import _ from '../util/_';

import Board, { Cell } from "../models/Board";
import MoveList from '../models/MoveList';
import Move from '../models/Move';

export const render = (template: (data: any) => string): (container: HTMLElement, data:any) => void => {
    return (container: HTMLElement, data: any) => {
        container.innerHTML = template(data);
    };
}

export const renderMyBoard = (data) => renderBoard(
    document.querySelector('.board'),
    data
);

export const renderBoard = render((board: Board) => {
    function getCellClass(cell: Cell): string {
        let cellString = 'cell';

        if (cell.value === '0') {
            cellString = 'cell cell_empty';
        }

        if (cell.value === '1') {
            cellString = 'cell cell_filled'
        }

        if (cell.selected) {
            cellString += ' cell_selected';
        }

        return cellString;
    }

    return `${_.mapDOM(board.grid, (row) =>
            `<div class="row">
                ${_.mapDOM(row, (cell) => (
                    `<div class="${getCellClass(cell)}" data-x="${cell.x}" data-y="${cell.y}">
                        ${cell.x},${cell.y}
                    </div>`
                ))}
            </div>`
    )}`;
});

export const renderMyMoveList = (data) => renderMoveList(
    document.querySelector('.move-list'),
    data,
);

export const renderMoveList = render((moveList: Move[]) => {
    return `${_.mapDOM(moveList, (el: Move) => (
        `<p>(${el.fromX},${el.fromY}) => (${el.toX},${el.toY})</p>`
    ))}`;
});
