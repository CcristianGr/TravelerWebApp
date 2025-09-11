import { Children } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background-color: ${(props) => props.blue ? "Blue" : "Gray"}
`;

export const Button = ({ Children, blue }) => {
    return <StyledButton blue={blue}>{Children}</StyledButton>
}