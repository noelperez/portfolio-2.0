import './portfolioList.scss';
import { useState } from 'react';

const PortfolioList = ({ title, isActive, setIsActive }) => {




  return (
    <li
      className={isActive == title ? 'portfoliolist active' : 'portfoliolist'}
      onClick={() => setIsActive(title)}

    >

      {title}

    </li>
  )
}

export default PortfolioList;
