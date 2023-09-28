import '../src/app/style/globals.scss'
import '../src/app/style/layout.scss';
import Header from '../src/app/components/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;