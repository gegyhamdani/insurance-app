/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Insurance Web App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})])
    .isRequired,
  pageProps: PropTypes.shape({}).isRequired
};

export default MyApp;
