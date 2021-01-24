import * as React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 65px;
    width: 350px;
    font-size: larger;
    border: 1px solid #ccc;
    border-radius: 0px;
    box-sizing: border-box;
    padding: 12px 20px;
    display: inline-block;
`;

export interface TextComponentProps {
    onInput: (arg: string) => void;
}
const TextComponent: React.SFC<TextComponentProps> = ({ onInput }) => {
    return (<StyledInput onChange={(e) => { onInput(e.target.value) }}
        placeholder={'Start Typing to Search ..'} />);
}

export default TextComponent;