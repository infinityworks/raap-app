import React from 'react';
import styled from 'styled-components';
// import { IconContext } from "react-icons";
// import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare  } from 'react-icons/fa';

const Wrapper = styled.div`
  padding: 10px 0;
`;

const Header = styled.h3`
  font-size: 1rem;
  color: #032f61;
`;

const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const SocialMedia = () => (
  <Wrapper>
    <Header>Follow Us</Header>
    <Logos>
      {/* <IconContext.Provider value={{ size: 25, color: '#032f61' }}>
        <FaFacebookSquare />
      </IconContext.Provider>
      <IconContext.Provider value={{ size: 25, color: '#032f61' }}>
        <FaTwitterSquare />
      </IconContext.Provider>
      <IconContext.Provider value={{ size: 25, color: '#032f61' }}>
        <FaYoutubeSquare />
      </IconContext.Provider> */}
    </Logos>
  </Wrapper>
);

export default SocialMedia;
