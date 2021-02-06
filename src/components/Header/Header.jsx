import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Styles from './Header.module.scss'


const Header = () => {
  return (
    <div className={Styles.header}>
      <div className={Styles.item}>
        <Link to="/">VideoTube</Link>
      </div>
      <div className={Styles.item}>
        <form>
          <input type="text" placeholder="検索" />
          <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  )
}

export default Header