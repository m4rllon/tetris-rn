import { TColors } from "../types/TColors";

export class Piece{
    constructor(
        private id:number,
        private corlor:TColors,
        private currentFormat:Array<number[]>,
    ){}

    public getCurrentFormat() {
        return this.currentFormat;
    }

    public swapCurrentFormat() {
        const columns = this.currentFormat[0].length
        const rows = this.currentFormat.length
        const transpost = Array.from({length:rows}, () => new Array(columns))

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                transpost[j][i] = this.currentFormat[i][j]
            }
        }

        const newFormat = []
        for(let i = 0; i < rows; i++){
            newFormat.push(transpost[i].reverse())
        }

        this.currentFormat = newFormat
    }

}