import React from 'react';
import { useNavigate } from 'react-router-dom';


const PortfolioCard = () => {
    const Navigate = useNavigate();

      const clickHandler = async () => {
          Navigate('/portfolio')
      }

    return (
        <div className='text-gray-800' onClick={clickHandler}>
         
        </div>
    )
}

export default PortfolioCard;