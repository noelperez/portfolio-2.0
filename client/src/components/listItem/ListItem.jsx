import { useState, useEffect } from "react";

const ListItem = ({section, hide }) => {

    const [capitalized, setCapitalized] = useState('');


    useEffect(() => {
        const firstLetter = section.charAt(0).toUpperCase();
        const capitalized = firstLetter + section.slice(1);
        setCapitalized(capitalized);
      }, []);
    
  return (
    <li >
        <a href={'#' + section} onClick={() => hide(false)} > {capitalized} </a>
        </li>
  )
}

export default ListItem;
