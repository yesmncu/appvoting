import { AppProvider } from '../context/context';
import '../src/style/globals.scss'
import '../src/style/layout.scss';
import Header from '../src/components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider data={pageProps.data}>
      <Header />
      <Component {...pageProps} />
    </AppProvider >
  );
}

export default MyApp;