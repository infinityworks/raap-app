import React, { Fragment } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Deal = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  background-color: #1A7F65;
  padding: 10px 0;
`;

class Index extends React.Component {
  static getInitialProps() {
    // console.log('initial', this.props)
  }

  componentDidMount() {
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Manchester Airport Duty Free & Shops</title>
        </Head>
        <Deal>
          <h2>Get 10% off your World Duty Free order!</h2>
          <p>Terms & Conditions apply</p>
        </Deal>
        <div>
          hello world
        </div>
      </Fragment>
    );
  }
}

export default Index;
