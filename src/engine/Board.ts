import { Piece } from "./Piece";

export class Board{
    constructor(
        private space:Array<number[]> = [],
        private pieces:Piece[] = [],
        private level:number,
        private status:boolean,
        private speed:number,
    ){}

    public createBoard() {
        this.space = [
            [1,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ];
    }

    public getBoardSpace() {
        return this.space;
    }

    public addPieceOnBoard(piece:Piece) {
        this.pieces.push(piece);
    }

    public getPieces() {
        return this.pieces;
    }

    public addPieceInSpaceBoard() {
    }

    public swapCurrentPieceInBoardSpace() {
        
    }
}