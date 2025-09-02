import { TColors } from "../types/TColors";
import { Tformat } from "../types/TFormat";

export class Piece{
    constructor(
        private id:number,
        private corlor:TColors,
        private formats:Tformat[],
        private currentFormat:Tformat,
    ){}

    public getCurrentFormat() {
        return this.currentFormat;
    }

    public swapCurrentFormat() {
        const currentFormat = this.currentFormat.format;
        const rows = currentFormat.length
        const colunms = currentFormat[0].length
        
        const newFormat:Array<number[]> = new Array(colunms).fill(
            new Array(rows).fill(0)
        )

        const r = rows-1
        for(let i = 0; i < rows; i++){
            
            for(let j = 0; j < colunms; j++){
                if(currentFormat[i][j] !== 0){
                    newFormat[j][r-j] = 1
                }
            }
        }

        this.currentFormat = {
            format:newFormat,
        position: 0}
        console.log(newFormat)
    }

}