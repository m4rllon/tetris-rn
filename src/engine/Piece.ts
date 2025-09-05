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

    public setCurrentFormat(newFormat:Array<number[]>) {
        this.currentFormat = newFormat;
    }
}