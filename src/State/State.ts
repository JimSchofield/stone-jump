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

interface MyProxyHandler extends ProxyHandler<State> {
    queuedRender: number | null;
}

const stateHandler: MyProxyHandler = {
    set(state: any, prop: string, value: any): boolean {
        // console.log(`Setting ${prop} to: `, value);
        state[prop] = value;
        // if (this.queuedRender === null) {
        //     this.queuedRender = requestAnimationFrame(() => {
                state.render();
        //         this.queuedRender = null;
        //     });
        // };
        return true;
    },
    queuedRender: null,  
}

export default new Proxy(target, stateHandler);  