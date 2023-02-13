import './Intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

const Intro = () => {

  const elemRef = useRef();

  useEffect(() => {

    init(elemRef.current, {
      showCursor: true,
      strings: ['Front-end Web Developer', 'React Advocate', 'Future Full Stack'], 
      backSpeed: 70
    });


  }, []);


  return (
    <div className='intro' id='intro'>

      <div className="left">

        <div className="imgContainer">

          <img src='assets/03.pngd' alt="person" />
          
          </div>


      </div>

      <div className="right">

        <div className="wrapper">

          <h2>Hi There, I'm</h2>
          <h1>Noel Pérez</h1>
          <h3>A <span ref={elemRef}></span></h3>




        </div>


        <a href='#aboutme'>
          <img src="assets/down.png" alt="" />
        </a>




      </div>
      
      
      
    </div>
  )
}

export default Intro
