import './Menu.scss'
import ListItem from '../listItem/ListItem';

const Menu = ( {openMenu, setOpenMenu} ) => {


  return (
    <div className={openMenu ?  'menu' : 'menu active'}>

      <ul>

        <ListItem section='intro' hide={(value) => setOpenMenu(value)}/>
        <ListItem section='aboutme' hide={(value) => setOpenMenu(value)}/>
        <ListItem section='portfolio' hide={(value) => setOpenMenu(value)}/>
        <ListItem section='works' hide={(value) => setOpenMenu(value)}/>
        <ListItem section='skills' hide={(value) => setOpenMenu(value)}/>
        <ListItem section='contact' hide={(value) => setOpenMenu(value)}/>
        



      </ul>

    </div>
  )
}

export default Menu;
