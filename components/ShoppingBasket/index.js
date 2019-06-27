import React from 'react';
import styled from 'styled-components';
// import { IconContext } from "react-icons";
// import { FaShoppingBasket } from 'react-icons/fa';

const Wrapper = styled.div`
  width: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

const Quantity = styled.p`
  padding: 5px;
`;

const ShoppingBasket = () => (
  <Wrapper>
    {/* <IconContext.Provider value={{ size: 25, color: '#032f61' }}>
      <FaShoppingBasket />
    </IconContext.Provider> */}
    <Quantity>1</Quantity>
  </Wrapper>
);

export default ShoppingBasket;
