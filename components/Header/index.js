import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar';
import ShoppingBasket from '../ShoppingBasket';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 90px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 0 15px;
`;
const Logo = styled.img`
  width: 144px;
  height: 62px;
  padding-top: 14px;
  margin-right: 25px;
`;
const HeaderText = styled.div`
  display: flex;
  flex-grow: 2;
  justify-content: flex-start;
  align-items: center;
`;
const Text = styled.h1`
  width: 150px;
  height: 36px;
  color: #032f61;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid black;
`;
const Header = props => (
  <Wrapper>
    <Logo
      src="https://i2.wp.com/marketingstockport.co.uk/wp/wp-content/uploads/2017/06/1280px-Manchester_Airport_logo.svg_.png?ssl=1"
      alt="mag logo"
    />
    <HeaderText>
      <Text>Shopping</Text>
    </HeaderText>
    <ShoppingBasket props={props} />
    <SearchBar />
  </Wrapper>
);
export default Header;
