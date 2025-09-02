import { useEffect, useState } from "react"
import { BoardBlock, BoardContainer, BoardRow, Container } from "./styles"
import { Board } from "../../engine/Board"
import { Piece } from "../../engine/Piece";

import { TColors } from "../../types/TColors";
import { formatsPieces } from "../../mocks/pieces";
import { Text, TouchableOpacity } from "react-native";

export function Home(){
    const board = new Board([], [], 1, false, 1);
    board.createBoard();
    const [boardSpace, setBoardSpace] = useState(board.getBoardSpace());

    const piece = new Piece(
        formatsPieces[0].id, 
        TColors.blue, 
        formatsPieces[0].formats, 
        formatsPieces[0].formats[0]
    )

    const handleAddPieceOnBoard = () => {
        board.addPieceOnBoard(piece)
        board.addPieceInSpaceBoard()
        setBoardSpace(board.getBoardSpace())
        console.log(piece.getCurrentFormat())
    }

    const handleChangeFormatPiece = () => {
        piece.swapCurrentFormat()
    }

    return <Container>
        <BoardContainer>
            {boardSpace.map(
                (boardLine, index) => <BoardRow>
                    {boardLine.map(
                        (block, index) => <BoardBlock></BoardBlock>
                    )}
                </BoardRow>
            )}
        </BoardContainer>
        <TouchableOpacity onPress={handleAddPieceOnBoard}>
            <Text>
                Adicionar peça
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleChangeFormatPiece}>
            <Text>
                Girar
            </Text>
        </TouchableOpacity>
    </Container>
}