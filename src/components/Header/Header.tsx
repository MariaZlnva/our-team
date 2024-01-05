import './Header.scss';
import back from '../../assets/image/icon-back.svg';
import exit from '../../assets/image/icon-exit.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { IChildren } from '../../redux/types';

export const Header = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header
      className={
        'header' + ' ' + (location.pathname === '/' ? 'header_position-start' : 'header_position')
      }
    >
      <button
        className={
          'header__btn header__btn-back' +
          ' ' +
          (location.pathname === '/' && 'header__btn-back_invisible')
        }
        onClick={() => navigate(-1)}
      >
        Назад
      </button>

      <button
        className={
          'header__btn-image' + ' ' + (location.pathname === '/' && 'header__btn-back_invisible')
        }
        onClick={() => navigate(-1)}
      >
        <img
          src={back}
          alt='Стрелка назад'
        />
      </button>
      <button className='header__btn header__btn-exit header__btn-exit_position'>Выход</button>
      <button className='header__btn-image header__btn-exit_position'>
        <img
          src={exit}
          alt=''
        />
      </button>
      {children}
    </header>
  );
};

export default Header;
