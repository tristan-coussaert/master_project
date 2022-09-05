import React, {useContext} from 'react'
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';
import { ThemeContext } from '../../ThemeContext';

const Footer = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme ? 'contenu light' : 'contenu dark'}>
    <div className="footer-container">
      <p>2022 Tech Shop Tous droits réservés</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
    </div>
  )
}

export default Footer