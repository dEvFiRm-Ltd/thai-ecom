import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Header from '../components/partials/Header';
import Navigation from '../components/partials/Navigation';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const RouteTop = () => {
    const { pathname } = useRouter();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <Header />
      <Navigation />
      <RouteTop />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
