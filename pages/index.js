import Head from "next/head";
import Card from '../src/app/components/Card';
import jsonData from "../api/personal.json";

const HomePage = () => {
  const data = jsonData;
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