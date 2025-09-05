export function swapCurrentFormat(currentFormat:Array<number[]>):number[][] {
        const columns = currentFormat[0].length
        const rows = currentFormat.length
        const transpost = Array.from({length:rows}, () => new Array(columns))

        for(let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                transpost[j][i] = currentFormat[i][j]
            }
        }

        const newFormat = []
        for(let i = 0; i < rows; i++){
            newFormat.push(transpost[i].reverse())
        }

        return newFormat
    }