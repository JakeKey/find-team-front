import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { GlobalStyle } from 'styles';
import { RECAPTCHA_SITE_KEY } from 'utils/api';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <Component {...pageProps} /> <GlobalStyle />
    </GoogleReCaptchaProvider>
  );
};

export default appWithTranslation(App);
