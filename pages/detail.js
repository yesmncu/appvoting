import Head from "next/head";
import Layout from './layout';
import CardDetail from '../src/app/components/CardDetail';

const DetailPage = ({ data }) => {
  return (
    <>
      <Head>
        <title> {data?.fullName} </title>
      </Head>
      <Layout>
        <div className='container'>
          <CardDetail data={data} />
        </div>
      </Layout>
    </>
  );
}

export default DetailPage;