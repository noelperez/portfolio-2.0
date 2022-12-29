import './Testimonials.scss';

const Testimonials = () => {

  const data = [
    {
      id: 1,
      title: 'CEO Luthor Corps',
      active: false,
      name: 'Michael Rosenbaum',
      pic: 'https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestias impedit id earum laudantium neque assumenda maiores ipsum.?',
      icon: 'assets/linkedin.png'
    },
    {
      id: 2,
      title: 'CEO of Queen Industry',
      active: true,
      name: 'Oliver Queen',
      pic: 'https://thumbs.dreamstime.com/b/funny-young-asian-man-making-face-rolling-eyes-up-52556985.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestias impedit id earum laudantium neque assumenda maiores ipsum.?',
      icon: 'assets/youtube.png'
    },
    {
      id: 3,
      title: 'Head of Product Marketing at ProDevs',
      active: false,
      name: 'Josh Sculpert',
      pic: 'https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestias impedit id earum laudantium neque assumenda maiores ipsum.?',
      icon: 'assets/youtube.png'
    }
  ];




  return (
    <div className='testimonials' id='testimonials'>
      <div className="container">
      <h1>Testimonials</h1>

      <div className="cardHolder">

        {data.map((d) => (

        <div className={d.active ? 'card active' : 'card'}>
          <div className="top">
            <img src="assets/right-arrow.png" className='left' alt="" />
            <div className="profilePic">
              <img src={d.pic} alt="" />
            </div>
            <img src={d.icon} className='right' alt="" />
          </div>
          <div className="center">
            <p>{d.comment}</p>
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
          
          ))}
          
      </div>
      </div>
      
    </div>
  )
}

export default Testimonials
