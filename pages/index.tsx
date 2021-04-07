import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Home: React.FC = () => {
  const { push } = useRouter();

  const isLoggedIn = false; // TODO handle isLoggedIn state

  useEffect(() => {
    if (!isLoggedIn) push('/login');
  }, [push, isLoggedIn]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
