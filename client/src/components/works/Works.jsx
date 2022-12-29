import './Works.scss';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useState } from 'react';
import Modal from './modal/Modal.jsx';

const Works = () => {

  const items = [

    {
      id: 1,
      title: 'A Platform Game',
      icon: 'https://toppng.com/uploads/preview/entertainment-icon-png-clipart-computer-icons-clip-gaming-controller-no-background-11562915088cfi0he8eru.png',
      desc: `This is one of the first projects I worked on. A minimalist and entertaining game. During this project, I was able to grasp a deep understanding of the OOP (Object Oriented Programming) main concepts (Polymorphism, Abstraction, Inheritance and Encapsulation), while learning the JavaScript Syntax. 

      The game consists of a static background, lined up as a grid, with the moving elements overlaid on top of it. I had the chance to play around with some of the CSS basic concepts, such as positioning, display, the Box Model and learn how to handle states within JavaScript classes.
      `,
      img: 'assets/platformgame.png'
    },

    {
      id: 2,
      title: 'Note Taking App',
      icon: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/note-taking-app-3349296-2785317.png',
      desc: `This is the typical note taking application, but with a small caveat; it uses client side localStorage to save the notes. Here, I make use of users’ triggered events to manage the state of the application. It consists of an object with key-value pairs, the key corresponding to the note’s title, and the value to the note’s content.`,
      img: 'assets/note-taking-app.png'
    },

    {
      id: 3,
      title: 'DEHANTA INTERNET',
      icon: 'assets/dehantaicon.png',
      desc: `This is one of the projects I’m most proud of; I started with the UI/UX design using Figma, implementing a combination of colors with a strong contrast for better readability for general and visually impaired users (color blindness), rounded borders and minimalist icons.

      For the Frontend part of the project, I used ReactJS, here I learned how to make use of functional components, as well as most of its newly introduced Hooks’ feature. For the icons I used the popular Material-UI library. 
      `,
      img: 'assets/dehantainternet.png'
    }
    ,
    {
      id: 4,
      title: 'Unit Conversion System',
      icon: 'assets/unit-system-icon.png',
      desc: `A unit conversion app is one of those tools you never know when you’re going to need them, but you feel grateful to have them around. 

      This project consists of a dropdown list of unit systems, after selecting a given system, the app automatically renders two more dropdown lists with the corresponding units we’ll be converting from/to.
      
      While developing this application, I learned how to handle events and query data, as well to learn how to understand unknown dataset schemas to make operations on top of them. 
       
      `,
      img: 'assets/unit-system.png'
    }
    ,
    {
      id: 5,
      title: 'Login UI',
      icon: 'assets/login-ui-icon.png',
      desc: `I find designing user interfaces really interesting and Figma is a tool that is fully equipped for this purpose. I wanted to design a modern Login/Signup interface, fully responsive, functional and with session capabilities.

      For the design I used Figma, implementing a user-friendly range of colors and modern design.
      
      The Frontend was developed in ReactJS, here I expanded my knowledge using new libraries such as React Router. I made used of the Material-UI library for most of the icons and buttons.
       
       
      `,
      img: 'assets/login-ui.png'
    }

  ]

  const [toggleSlide, setToggleSlide] = useState(0);


  const moveSlide = (way) => {
    
    if (way == 'left') {
      //console.log((items.length -1) * -1, toggleSlide)

      if (toggleSlide == 0 ) {
        setToggleSlide( (items.length - 1) * -1);
      } else {
        setToggleSlide(toggleSlide + 1);
      }
    } else {

      if ( toggleSlide == ( (items.length - 1) * -1)) {
        setToggleSlide(0);
      } else {
        
        setToggleSlide(toggleSlide - 1);
      }

    }


  }






  return (
    <div className='works' id='works'>
 

      

      <div className="slider" style={ {left: `${toggleSlide * 100}%`} }>

        {items.map((item) => (

          <div className="container">

          <div className="item">
            <div className="left">

              <div className="leftContainer">

                <div className="imgContainer">
                  <img src={item.icon} alt="" />
                </div>

                <h2>{item.title}</h2>

                <p>{item.desc}</p>
                



              </div>


            </div>
            <div className="right">
            <img src={item.img} alt="" />
            </div>

            
          </div>
        </div>


        ))}


        
        


      </div>

      <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=> moveSlide('left')}/>
      <img src="assets/arrow.png" className='arrow right'alt="" onClick={()=> moveSlide()}/>

      

    </div>
  )
}

export default Works;
