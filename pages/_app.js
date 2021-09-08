import '../styles/globals.css'
import 'rc-footer/assets/index.css';
import React, { useState, useEffect } from 'react';
import { useStore } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { wrapper } from "../redux/store";
import { appWithTranslation } from 'next-i18next';
import App from 'next/app';
import Head from 'next/head'
import Router from 'next/router'
import * as Sentry from '@sentry/browser';
import * as log from 'loglevel';
import { AuthProvider } from '../utils/auth';
import NextSEO from '../components/NextSEO';

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

function MyApp(props) {
  const [appReady, setAppReady] = useState(false);
  const store = useStore((state) => state);

  // Page props that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
  const { Component, pageProps } = props;

  const app = (
    <AuthProvider>
      <NextSEO />
      <Component {...pageProps} />
    </AuthProvider>
  )

  // With PersistGate and loading={null}, it will be blank page if fetching with Google, bad for SEO
  // Use Router from 'next/router' in client side will throw error
  if (typeof window !== 'undefined') {
    return (
      <PersistGate persistor={store.__persistor} loading={null}>
        {app}
      </PersistGate>
    )
  } else {
    return (
      <PersistGate persistor={store.__persistor} loading={app}>
        {app}
      </PersistGate>
    )
  }
}

export default wrapper.withRedux(appWithTranslation(MyApp));
