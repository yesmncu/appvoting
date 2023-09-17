import '../src/app/style/globals.scss'
import '../src/app/style/layout.scss';
import Header from '../src/app/components/Header';

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default RootLayout;