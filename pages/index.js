import Head from "next/head";
import Card from '../src/app/components/Card';

import { useAppContext } from '../context/context';


const HomePage = () => {

  const { data } = useAppContext();

  return (
    <>
      <Head>
        <title>AYIN PERSONELİ OYLAMASI</title>
      </Head>
        <div className='container'>
          <Card data={data} />
        </div>
    </>
  );
}


export default HomePage;