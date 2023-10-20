import Head from "next/head";
import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <Head>
        <title> Sayfa Bulunamadı </title>
      </Head>
      <div className='notFound'>
        <div className='container'>
          <p>Üzgünüz, aradığınız sayfa mevcut değil.</p>
          <Link href="/" className="btn-default">
            Anasayfa'ya dön
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;