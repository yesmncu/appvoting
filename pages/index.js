import Head from "next/head";
import Layout from './layout';
import Card from '../src/app/components/Card';
import jsonData from "../api/personal.json";

const HomePage = () => {
  const data = jsonData;
  return (
    <>
      <Head>
        <title>AYIN PERSONELİ OYLAMASI</title>
      </Head>
      <Layout>
        <div className='container'>
          <Card data={data} />
        </div>
      </Layout>
    </>
  );
}

export default HomePage;