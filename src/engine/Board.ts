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
        const currentPiece = this.pieces[0];
        const currentPieceFormat = currentPiece.getCurrentFormat()

        const nRows = currentPieceFormat.format.length
        const lengthRows = currentPieceFormat.format[0].length

        for(let i = 0; i < nRows; i++){
            for(let j = 0; j < lengthRows; j++){
                this.space[i][2+j] = currentPieceFormat.format[i][j]
            }
        }
    }

    public swapCurrentPieceInBoardSpace() {
        
    }
}