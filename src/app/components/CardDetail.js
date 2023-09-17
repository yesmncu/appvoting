import Image from 'next/image';
import Link from "next/link";


const CardDetail = ({ data }) => {
  return (
    <div className="cardDetail">
      <div className="cardDetail__img"> <Image src={data?.images} alt={data?.fullName} width={220} height={220} /> </div>
      <div className='cardDetail__body'>
        <div className='cardDetail__body--name'>
          <strong> {data?.fullName} </strong>
          <span> {data?.title} </span>
        </div>
        <div className='cardDetail__body--info'>
          <a> <b>Adres:</b> {data?.address} </a>
          <a as={Link} href={`tel:${data?.phone}`}> <b>Telefon:</b> {data?.phone} </a>
          <a as={Link} href={`mailto:${data?.email}`}> <b>Email:</b> {data?.email} </a>
        </div>

        <div className='cardDetail__body--content'>
          <p>  {data?.content} </p>
        </div>

      </div>
    </div>
  )
}

export default CardDetail;