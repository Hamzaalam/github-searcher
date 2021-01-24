import * as React from 'react';
import styled from 'styled-components';
import { Flex } from './FlexBox';
const avatarURL = `https://camo.githubusercontent.com/f5f5fa1c2753be299a410838a5140a701cc66fb4adc13c0b9a3d45936d2bf0d8/68747470733a2f2f696d6167652e666c617469636f6e2e636f6d2f69636f6e732f706e672f3531322f32352f32353233312e706e67`;

const StyledAvatar = styled.img`
    width:60px;
`;
const TopText = styled.h2`
    margin:0px;
`;
const BottomText = styled.p`
    margin: 4px 0px;
    color: grey;
`;

export interface SearchHeaderProps {

}
const SearchHeader: React.SFC<SearchHeaderProps> = () => {
    return (
        <Flex width="540px" justifyContent="right" alignItems={'center'}>
            <StyledAvatar src={avatarURL} />
            <Flex flexDirection='column' alignItems="end" marginLeft="15px">
                <TopText>Github Searcher</TopText>
                <BottomText>Search users or repositries below</BottomText>
            </Flex>
        </Flex>
    );
}

export default SearchHeader;