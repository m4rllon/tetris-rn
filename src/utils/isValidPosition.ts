export function isValidPosition(
    board: number[][], 
    pieceShape: number[][], 
    position: {x:number, y:number}){
    /**
     * board: matrix of board space;
     * pieceShape: new piece shape matrix after swap;
     * position: i and j numbers of a[0,0] on pieceShape.
     */

    const BMrows = board.length
    const BMcolunms = board[0].length

    const BProws = pieceShape.length
    const BPcolunms = pieceShape[0].length
    
    let newPosition = {
        x: position.x,
        y: position.y
    }

    for(let i = position.x; i < BProws; i++){
        for(let j = position.y; j < BPcolunms; j++){
            if(
                (pieceShape[i][j] === 1 && board[i][j] !== 0) ||
                (position.x + i >= BMrows && position.x < 0) ||
                (position.y + j >= BMcolunms && position.y < 0)
            ){
                newPosition.y = -2
                newPosition.x = -2
            }
        }
    }
    
    return (newPosition.x === -2 && newPosition.y === -2) ? false : true;
}
