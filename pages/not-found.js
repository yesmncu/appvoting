import Head from "next/head";
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Sayfa Bulunamadı</title>
      </Head>
      <div className='notFound'>
        <div className='container'>
          <p> Üzgünüz, aradiginiz sayfa mevcut değil. </p>
          <Link href="/">
            <button className="btn-default"> Anasayfa </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;