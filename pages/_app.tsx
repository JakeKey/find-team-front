import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { GlobalStyle } from 'styles';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} /> <GlobalStyle />
    </>
  );
};

export default appWithTranslation(App);
