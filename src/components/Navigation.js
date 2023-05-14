import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import { MdOutlineDarkMode, MdOutlineLightMode, MdTranslate, MdOutlineGTranslate, MdOutlineLogout, MdFavoriteBorder, } from 'react-icons/md';
import { TbHome } from 'react-icons/tb';

function Navigation({ logout, name }) {
  const path = window.location.pathname;
  const { localeContextValue, themeContextValue } = React.useContext(LocaleContext);
  const { locale, toggleLocale } = localeContextValue;
  const { theme, toggleTheme } = themeContextValue;

  return (
    <div className='note-app__nav'>
      <p className='notes-app__title'>{locale === 'id' ? 'Hey Catatan!!' : 'HeyCa!!'}</p>
      <nav>
        <div className='notes-app__nav-left'>
        {
          path === '/'
          ? <Link className='' to='/archived'><MdFavoriteBorder /></Link>
          : <Link className='' to='/'><TbHome /></Link>
        }
        </div>
        <div className='notes-app__nav-right'>
          <button onClick={toggleLocale}>{locale === 'id' ? <MdTranslate /> : <MdOutlineGTranslate />}</button>
          <button onClick={toggleTheme}>{theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}</button>
          <button onClick={logout}><MdOutlineLogout /></button>
        </div>
      </nav>
    </div>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string,
}

export default Navigation;
