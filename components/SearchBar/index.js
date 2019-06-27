import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchComponent = styled.div`
  width: 100%;
  max-width: 345px;
  height: 40px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border: 1px solid #b8b8b8;
  border-radius: 5px;
`;
const Search = styled.input`
  width: 100%;
  max-width: 300px;
  min-width: 100px;
  height: 40px;
  text-indent: 10px;
  font-size: 18px;
  color: #032f61;
  border-radius: 5px 0 0 5px;
  outline-style: none;
`;
const Icon = styled.p`
  width: 45px;
  height: 40px;
  color: #032f61;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0 5px 5px 0;
  border-left: 1px solid #ddd;
`;

const SearchBar = () => (
  <Wrapper>
    <SearchComponent>
      <Search />
      <Icon><FaSearch /></Icon>
    </SearchComponent>
  </Wrapper>
);

export default SearchBar;
