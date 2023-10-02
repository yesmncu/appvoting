import Head from "next/head";
import CardDetail from '../src/components/CardDetail';

const DetailPage = ({ data }) => {
  return (
    <>
      <Head>
        <title> {data?.fullName} </title>
      </Head>
        <div className='container'>
          <CardDetail data={data} />
        </div>
    </>
  );
}

export default DetailPage;