import Move from './Move';

export default class MoveList {
    _moves: Move[] = [];

    constructor(moves: Move[] = []) {
        this._moves = moves;
    }

    get moves(): Move[] {
        return this._moves;
    }

    addMove(m: Move): void {
        this._moves.push(m);
    }

    removeMove(m: Move): Move[] {
        const newMoves = [...this.moves.filter(el => el !== m)];
        return newMoves;
    }
}
