export default class Move {
    constructor(
        public from: {
            x: number,
            y: number,
        },
        public to: {
            x: number,
            y: number,
        }
    ) {}
}
