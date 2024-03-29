import React, {useContext} from 'react'
import { ThemeContext } from './ThemeContext'
import './BtnToggle.css'

export default function BtnToggle() {
    const {toggleTheme, theme} = useContext(ThemeContext)
  return (
    <div onClick={toggleTheme} className={theme ? 'btn-toggle goLight' : 'btn-toggle goDark'}>
        {theme ? "Dark" : "Light"}
    </div>
  )
}