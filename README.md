# Stone-jump

Designed to be a simulator/solver for stone jumping solitaire-type games.

## Install and run

```
npm install
npm run serve
```

## TODO:
- [ ] Pass a metric to a `findMoves` function that would allow for possible legal moves
- [ ] Create `findMoves` function that takes board and metric and gives possible moves
- [ ] Create `moveHistory` which will allow tracking of moves and rewinding
- [ ] Create recursive `findASolution` which finds first possible solution recursively
- [ ] Create recursive `countAllSolutions`
