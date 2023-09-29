import { AppProvider } from '../context/context';
import '../src/app/style/globals.scss'
import '../src/app/style/layout.scss';
import Header from '../src/app/components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider data={pageProps.data}>
      <Header />
      <Component {...pageProps} />
    </AppProvider >
  );
}

export default MyApp;