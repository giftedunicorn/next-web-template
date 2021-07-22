import React, { useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head'
import Router from 'next/router'
import * as Sentry from '@sentry/browser';
import * as log from 'loglevel';
import { AuthProvider } from '../utils/auth';

// toggle logs for env
if (process.env.NODE_ENV === 'production') {
  log.disableAll()
} else {
  log.enableAll()
}

// setup sentry when app initial
if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: ""
  });
}

function WebApp(props) {
  const [appReady, setAppReady] = useState(false);

  // Page props that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
  const { Component, pageProps } = props;

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default WebApp