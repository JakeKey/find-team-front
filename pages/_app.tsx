import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
