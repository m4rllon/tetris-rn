import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex: 1;

    
    justify-content: center;
    align-items: center;

    background-color: gray;
`

export const BoardContainer = styled.View`
    width: 80%;
    height: 72%;

    justify-content: center;
    align-items: center;

    background-color: black;

    border-width: 5px;
    border-color: aliceblue;
`

export const BoardRow = styled.View`
    justify-content: center;
    align-items: center;

    flex-direction: row;
`

export const BoardBlock = styled.View`
    flex: 1;
    height: 43px;

    border-width: 3px;
    border-color: gray;
`