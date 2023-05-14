import React from 'react';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import { MdTranslate, MdOutlineGTranslate, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

function FirstPage() {
  const { localeContextValue, themeContextValue } = React.useContext(LocaleContext);
  const { locale, toggleLocale } = localeContextValue;
  const { theme, toggleTheme } = themeContextValue;

  return (
    <>
      <header>
        <img 
          className='hero-img lazyload' 
          src='./images/skeleton/placeholder.webp' 
          data-src='./images/heros/her-3.webp'
          alt='' />
          <p className='notes-app__title bold'>HeyCa!!</p>
      </header>
      <main>
        <div className='first-page'>
          {/* <p className='notes-app__title bold'>Catatan Untukmu</p> */}
          <p>
            {
              locale === 'id'
                ? 'Tuliskan kenangan manis, pahit, indah dan sedihmu tanpa batas. Aku akan selalu ada untuk menemanimu disaat apapun itu.'
                : 'Write down your sweet, bitter, beautiful and sad memories without limits. I will always be there to accompany you at any time.'
            }
          </p>
          <div className='action-button__first-page'>
            <Link className='register' to='/register'>{locale === 'id' ? 'Daftar' : 'Register'}</Link>
            <Link className='login' to='/login'>{locale === 'id' ? 'Masuk' : 'Login'}</Link>
          </div>
          <div className='heart-msg'>
            <p>{locale === 'id' ? `~~~~~~~~~~"Dibuat dengan sepenuh hati"~~~~~~~~~~` : `~~~~~~~~~~"Made with all my heart"~~~~~~~~~~`}</p>
          </div>
          <div className='translate-btn__first-page'>
            <button onClick={toggleLocale}>{locale === 'id' ? <MdTranslate /> : <MdOutlineGTranslate />}</button>
            <button onClick={toggleTheme}>{theme === 'light' ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default FirstPage;
