import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Copyright from '../components/CopyRight';
import './styles.css';
import Navbar from '../components/Navbar';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';


// context: https://www.netlify.com/blog/2020/12/01/using-react-context-for-state-management-in-next.js/

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to front!</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
    <ThemeProvider theme={theme}>
        <Navbar/>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      {/* <div className="app">
        <main>
          <Navbar/>
          <Component {...pageProps} />
       
        </main>
      </div> */}
    </>
  );
}

export default CustomApp;
