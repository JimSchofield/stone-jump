import Move from './Move';

export default class MoveList {
    _moves: Move[] = [];

    constructor(moves: Move[] = []) {
        this._moves = moves;
    }

    get moves(): Move[] {
        return this._moves;
    }

    addMove(m: Move): MoveList {
        return new MoveList([...this.moves, m]);
    }

    removeMove(m: Move): MoveList {
        return new MoveList([...this.moves.filter(el => el !== m)]);
    }

    removeIndex(index: number): MoveList {
        return new MoveList([...this.moves.splice(index,1)])
    }
}
