import Board, { Cell } from "../models/board";
import MoveList from "../models/MoveList";

interface State {
    registerRenderFunction: (f: () => void) => void;
    gameBoard: Board;
    possibleMoves: MoveList;
    possibleMovesFromSelected: { x: number, y: number }[];
    [key: string]: any; // Added so we can dynamically update state, see changers.ts line 6
}

const target: State = {
    registerRenderFunction(func: () => void) {
        this.render = func;
    },
    gameBoard: null,
    possibleMoves: null,
    possibleMovesFromSelected: null,
}

const stateHandler: ProxyHandler<State> = {
    set(state: any, prop: string, value: any): boolean {
        // console.log(`Setting ${prop} to: `, value);
        state[prop] = value;
        state.render();
        return true;
    }
}

export default new Proxy(target, stateHandler);