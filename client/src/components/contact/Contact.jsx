import './Contact.scss';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import '../../global.scss';
import { useState } from 'react';



const Contact = () => {

  const [message, setMessage] = useState(false);



  const handleClick = (e) => {
    e.preventDefault();
    setMessage(true);

  }
  return (
    <div className='contact' id='contact'>

      <div className="arrow">

        <a href="#intro">

        <img src="assets/down.png" alt="" />


        </a>

        

      </div>

      <div className="container">
        <div className="left">

          <div className="imgContainer">
            <MailOutlineIcon />
          </div>
        </div>
        <div className="right">

          <div className="container">

            <h2> Let's Connect! </h2>


            <form>

              <input type="text" placeholder='email' />
              <textarea placeholder='message'></textarea>
              <Button variant='contained' size='large' onClick={handleClick}> Send </Button>
              <p className={message ? 'message active' : 'message'}> Thank you!, we'll contact you ASAP.  </p>
              



            </form>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Contact;
