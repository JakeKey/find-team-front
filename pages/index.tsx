import Head from 'next/head';

import useAuth from 'hooks/useAuth';

const Home: React.FC = () => {
  useAuth(true, true);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
