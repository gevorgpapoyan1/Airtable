import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardDataStats from './CardDataStats';
import { loadCardDetails } from '../../../store/slices/cardSlice';
import { RootState, AppDispatch } from '../../../store';
import { Link } from 'react-router-dom';

const MyCards = ({isCardPage = false}: { isCardPage: boolean }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { cardDetails, loading, error } = useSelector((state: RootState) => state.card);

  useEffect(() => {
    dispatch(loadCardDetails());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-22 font-semibold text-third">My Cards</h2>
          <Link
            to="/credit-card"
          >
            {!isCardPage && <h2 className="text-right text-[17px] font-semibold text-third">See All</h2>}
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 h-full md:grid-cols-2 md:gap-8 xl:grid-cols-2 2xl:gap-7.5">
          {cardDetails.map((card, index) => (
            <CardDataStats
              balance={card.balance}
              cardHolder={card.cardHolder}
              validThru={card.validThru}
              cardNumber={card.cardNumber}
              darkCard={index === 0}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyCards;
