import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { loadReCaptcha } from 'react-recaptcha-v3';

import { GlobalStyle } from 'styles';
import { RECAPTCHA_SITE_KEY } from 'utils/api';
import { store } from 'store';
import { useEffect } from 'react';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    loadReCaptcha(RECAPTCHA_SITE_KEY);
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} /> <GlobalStyle />
      <ToastContainer />
    </Provider>
  );
};

export default appWithTranslation(App);
