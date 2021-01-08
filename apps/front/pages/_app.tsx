import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Copyright from '../components/CopyRight';
import './styles.css';
import { Box } from '@material-ui/core';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to front!</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
          {/* <Box mt={5}>
            <Copyright />
          </Box> */}
        </main>
      </div>
    </>
  );
}

export default CustomApp;
