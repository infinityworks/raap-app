import React from 'react';
import styled from 'styled-components';
import SocialMedia from '../SocialMedia';

const Wrapper = styled.div`
  background-color: #f3f4f5;
  padding: 10px;
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Header = styled.h3`
  font-size: 1rem;
  color: #032f61;
  padding-top: 20px;
  padding-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 10px 0;
  &:hover {
    text-decoration: underline;
  }
`;

const Link = styled.a`
  font-size: 1rem;
  color: #032f61;
  text-decoration: none;
`;

const footer = [
  {
    title: 'Shopping Information',
    links: [
      {
        text: 'Frequently Asked Questions',
        url: '/frequently-asked-questions',
      },
      { text: 'Price match', url: '#' },
      { text: 'Returns policy', url: '#' },
      { text: 'Shopping Terms & Conditions', url: '#' },
      { text: 'VAT Refunds', url: '#' },
    ],
  },
  {
    title: 'Passenger Guides',
    links: [
      { text: 'Security', url: '#' },
      { text: 'Guides to Travelling', url: '#' },
      { text: 'FAQs', url: '#' },
      { text: 'Contact Us', url: '#' },
    ],
  },
  {
    title: 'About MAG',
    links: [
      { text: 'Who We Are', url: '#' },
      { text: 'Company Details', url: '#' },
      { text: 'Business Development', url: '#' },
      { text: 'Careers at MAG', url: '#' },
    ],
  },
  {
    title: 'Information',
    links: [
      { text: 'Community', url: '#' },
      { text: 'Media Centre', url: '#' },
      { text: 'Modern Slavery Act', url: '#' },
    ],
  },
];

const Footer = () => (
  <Wrapper>
    <LinksSection>
      {footer.map(list => (
        <div key={list.title}>
          <Header>{list.title}</Header>
          <List>
            {list.links.map(link => (
              <ListItem key={link.text}>
                <Link href={link.url}>{link.text}</Link>
              </ListItem>
            ))}
          </List>
        </div>
      ))}
    </LinksSection>
    <SocialMedia />
  </Wrapper>
);

export default Footer;
