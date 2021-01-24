import * as React from 'react';
import styled from "styled-components";
import { options } from './options'
const StyledSelect = styled.select`
    font-size: larger;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 12px 20px;
    display: inline-block;
    color: grey;
    background: none;
    margin-left: 20px;
    height: 65px;
`;
const StyledOption = styled.option`
    font-size: larger;
`;

export interface DropDownProps {
    selectedOption: string;
    onDropDownChange: (arg: string) => void;
}
const DropDown: React.SFC<DropDownProps> = ({ selectedOption, onDropDownChange }) => {
    return (<StyledSelect value={selectedOption} onChange={(e) => { onDropDownChange(e.target.value) }}>
        {options.map(o =>
            <StyledOption key={o.id} value={o.value}> {o.name}</StyledOption>
        )
        }
    </StyledSelect>);
}

export default DropDown;