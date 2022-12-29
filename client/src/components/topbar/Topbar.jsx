import './Topbar.scss';
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import { useState } from 'react';

const Topbar = ({openMenu, setOpenMenu}) => {
  



  return (
    <div className={openMenu ? 'topbar active': "topbar"} id='topbar'>
      <div className="wrapper">

        <div className="left">

          <a href='/' className='logo'> N&#123;O&#125;EL </a>
          
          <div className="itemContainer">
          <PersonIcon className='icon'/>
          <span> +809.935.7154 </span>
            

          </div>
          <div className="itemContainer">
          <EmailIcon className='icon'/>
          <span> noel999@gmail.com </span>
            

          </div>
          <div className="itemContainer">
          <ArticleIcon className='icon'/>
          <a href="/blog">Blog</a>
            

          </div>

        </div>
        

        <div className="right">
          
          <div className="hamburger" onClick={() => setOpenMenu(!openMenu)}>

            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>


          </div>

          


        </div>
      


      </div>
      
    </div>
  )
}

export default Topbar
