import React from 'react';
import ChipCardL from "../../../assets/images/card-chip/Chip_Card_Light.png";
import ChipCardD from "../../../assets/images/card-chip/Chip_Card_Dark.png";
import { encryptCardNumber } from '../../../shared/helpers/helpers.ts';

interface CardDataStatsProps {
  balance: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  darkCard?: boolean;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  darkCard = false,
}) => {
  const defaultStyles = darkCard ? {
      background: 'linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)',
      color: 'white',
    } : {
      background: 'white',
      color: 'black',
    };

  const footerStyles = darkCard ? {
    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)',
  } : {
    borderTop: "1px solid #DFEAF2"
  };

  const titleStyle = darkCard ? "text-white" : "text-third"
  const valueStyle = darkCard ? "text-white" : "text-third"
  const encryptNumber = encryptCardNumber(cardNumber)

  return (
    <div
      style={defaultStyles}
      className={`grid-cols-6 rounded-25 w-full flex flex-col justify-between h-full`}
    >
      <div className="flex flex-col justify-between p-6.5 gap-9">
        <div className="flex justify-between items-center">
          <div>
            <div className={`${titleStyle} text-xs font-normal`}>Balance</div>
            <div className={`${valueStyle} text-xl font-semibold`}>{balance}</div>
          </div>
          <img
            src={(darkCard ? ChipCardL : ChipCardD) as string}
            alt="Chp Card"
            className="w-8 h-auto"
          />

        </div>

        <div className="flex gap-16.025 items-center">
          <div className="flex flex-col">
            <div className={`${titleStyle} text-xs font-normal`}>CARD HOLDER</div>
            <div className={`${valueStyle} text-15 font-semibold`}>{cardHolder}</div>
          </div>
          <div className="flex flex-col">
            <div className={`${titleStyle} text-xs font-normal`}>VALID THRU</div>
            <div className={`${valueStyle} text-15 font-semibold`}>{validThru}</div>
          </div>
        </div>
      </div>

      <div
        style={footerStyles}
        className="px-6.5 py-4 flex justify-between items-center">
        <div className={`${valueStyle} text-22 font-semibold font-lato`}>{encryptNumber}</div>

        <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="15" fill={darkCard ? "white" : "#9199AF"} fill-opacity="0.5" />
          <circle cx="29" cy="15" r="15" fill={darkCard ? "white" : "#9199AF"} fill-opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default CardDataStats;
