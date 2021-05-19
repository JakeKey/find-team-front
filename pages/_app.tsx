import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { GlobalStyle } from 'styles';
import { RECAPTCHA_SITE_KEY } from 'utils/api';
import { store } from 'store';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  // TODO cancel saga queries on route change
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <Provider store={store}>
        <Component {...pageProps} /> <GlobalStyle />
      </Provider>
    </GoogleReCaptchaProvider>
  );
};

export default appWithTranslation(App);
