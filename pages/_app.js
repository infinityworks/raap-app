import App, { Container } from 'next/app';
import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import ResetStyle from '../components/ResetStyle';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Fragment>
            <ResetStyle />
            <h1>TEST</h1>
            <Component {...pageProps} />
          </Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}
