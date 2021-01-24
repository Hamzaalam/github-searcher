import * as React from 'react';
import { useState, useEffect } from 'react';
import TextComponent from '../components/TextField';
import DropDown from '../components/DropDown/indetx';
import { Box, Flex } from '../components/FlexBox';
import styled from 'styled-components';
import { customSearch } from '../utils/customSearch';
import SearchHeader from '../components/SearchHeader';
import { debounce } from 'lodash';

const Wrapper = styled(Flex)`
width:1000px;
`;

const StyledImage = styled.img`
    width:300px;
    height:150px;
`;
const Tile = styled.a`
    width:300px;
    height:150px;
    background:#c4c4c4;
    margin:20px 10px 0px 0px;
    &:hover ${StyledImage} {
        border: 1px solid grey;
      }
`;

export interface SearchPageProps { }

const SearchPage: React.SFC<SearchPageProps> = () => {
    const [selectedOption, setSelectedoption] = useState<string>('users');
    const [keyWord, setKeyWord] = useState<string>('');
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if (!keyWord) {
            setData([]);
        }
    }, [keyWord])
    const handleSearch = async (value: string) => {
        setKeyWord(value);
        if (value.length > 2) {
            try {
                const result = await customSearch(value, selectedOption);
                setData(result.items);
            }
            catch (err) {
                alert(err.message);
            }
        }
    }
    const handleDropDown = async (newOption: string) => {
        setSelectedoption(newOption);
        if (keyWord.length > 2) {
            try {
                const result = await customSearch(keyWord, newOption);
                setData(result.items);
            }
            catch (err) {
                alert(err.message);
            }
        }
    }
    return (<Wrapper
        flexWrap="wrap"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        gridArea="main"
    >
        <Flex flexWrap="wrap"
            justifyContent={'left'}
            flexDirection={data.length ? 'row' : 'column'}
            style={{ margin: '20px 10px 0px 35px' }}
        >
            <Flex justifyContent="center">
                <SearchHeader />
            </Flex>
            <Flex justifyContent="center" marginTop={10}>
                <TextComponent onInput={debounce((val: string) => handleSearch(val), 1000)} />
                <DropDown selectedOption={selectedOption} onDropDownChange={handleDropDown} />
            </Flex>

        </Flex>
        <Flex
            flexWrap="wrap"
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            gridArea="main"
        >
            {data.map((d: any) =>
                <Tile key={d.avatar_url} href={d.html_url} target="_blank">
                    <StyledImage src={d.avatar_url} />
                </Tile>
            )}
        </Flex>

    </Wrapper >
    );
}

export default SearchPage;