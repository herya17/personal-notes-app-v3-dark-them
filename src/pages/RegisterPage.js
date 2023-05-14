import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

function RegisterPage() {
  const { localeContextValue } = React.useContext(LocaleContext);
  const { locale } = localeContextValue;

  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    
    if (!error) {
      navigate('/login');
    }
  }

  return (
    <>
    <header>
      <div className='header-register-page'>
        <p>{locale === 'id' ? 'Hola Selamat Datang!' : 'Hola Welcome!'}</p>
        <p>
          {
            locale === 'id' 
              ? 'Ayo daftarin dirimu dulu yah bila kamu belum terdaftar!'
              : 'Come on, register yourself first, if you haven\'t registered yet!'
          }
        </p>
        {/* <p>Daftarin dirimu dulu yah, jangan lupa isinya make hati dan cinta yang tulus!</p> */}
      </div>
    </header>
    <main>
      <div className='register-page'>
        <RegisterInput register={onRegisterHandler} />
        <p className='have-an-account'>
          {locale === 'id' ? 'Kamu punya akun? ' : 'Have an account? '}
          <Link to='/login'>{locale === 'id' ? 'Masuk aja' : 'Login'}</Link></p>
      </div>
    </main>
    </>
  );
}

export default RegisterPage;
