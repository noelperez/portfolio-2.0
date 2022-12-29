import './Portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState, useEffect } from 'react';
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio

} from '../../data'


const Portfolio = () => {

  const [isActive, setIsActive] = useState('React');
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (isActive) {
      case 'React':
        setData(featuredPortfolio);
        break;
      case 'JavaScript':
        setData(webPortfolio);
        break;
      case 'UI Designs':
        setData(mobilePortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [isActive]);

  const titles = [
    {
      id: 'react',
      title: 'React'
    },
    {
      id: 'javascript',
      title: 'JavaScript'
    },
    {
      id: 'uidesigns',
      title: 'UI Designs'
    }
  ];


  return (
    <div className='portfolio' id='portfolio'>
      <h1> Portfolio </h1>
      <ul>
        {titles.map((item) => (
          <PortfolioList title={item.title} isActive={isActive} setIsActive={setIsActive} />
        ))}
      </ul>

      <div className="container">

        {data.map((d) => (
          <div className="item" onClick={() => window.open(`/projects/${d.name}`, '_blank')}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>

        ))}

      </div>



    </div>
  )
}

export default Portfolio;