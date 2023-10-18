import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Card = ({ data }) => {

  const [votes, setVotes] = useState({});

  const voteClick = (index) => {
    const newVotes = { ...votes };
    newVotes[index] = (newVotes[index] || 0) + 1;
    setVotes(newVotes);
  };

  const sortedData = [...data].sort((a, b) => (votes[data.indexOf(b)] || 0) - (votes[data.indexOf(a)] || 0));

  return (
    <div className='card'>
      {sortedData?.map((item, index) => (
        <div key={index} className='card__item'>
          <div className='card__body'>
            <div className='card__item--img'>
              <Image src={item.images} alt={item.fullName} width={120} height={120} />
            </div>
            <div className='card__item--info'>
              <strong>{item.fullName}</strong>
              <span>{item.title}</span>
              <Link href={item.id} className='detail-btn'>
                Detay
              </Link>
            </div>
          </div>
          <button className='btn-default' onClick={() => voteClick(data.indexOf(item))}>
            OY VER ({votes[data.indexOf(item)] || 0})
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;
