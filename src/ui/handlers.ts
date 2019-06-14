import { selectStone, highlightValidMoves } from "../state/changers";
import { BOARD_CONTAINER } from "../constants";

interface Handlers {
    [key: string]: () => void;
}

const handlers: Handlers = {
    registerBoardClicks():void {
        document.querySelector(BOARD_CONTAINER).addEventListener('click', event => {
            let {x, y} = (event.target as HTMLElement).dataset;
            if (x && y) {
                selectStone(+x,+y);
                highlightValidMoves(+x,+y);
            }
        })
    }
}

function registerHandlers(): void {
    Object.keys(handlers)
        .forEach((handlerName: string) => handlers[handlerName]());
}

export default registerHandlers;