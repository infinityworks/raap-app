import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: blue;
  cursor: pointer;
  text-decoration: underline;
`;

const PostLink = ({ title }) => (
  <Link as={`/post/${title}`} href={`/post?title=${title}`}>
    <StyledLink href={`/post?title=${title}`}>
      {title}
    </StyledLink>
  </Link>
);

PostLink.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostLink;
