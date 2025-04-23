import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { GlobalStyle } from 'styles';
import { RECAPTCHA_SITE_KEY } from 'utils/api';
import { store } from 'store';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
        <Component {...pageProps} /> <GlobalStyle />
        <ToastContainer />
      </GoogleReCaptchaProvider>
    </Provider>
  );
};

export default appWithTranslation(App);
