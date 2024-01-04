import { ITeamItem } from '../../redux/types';
import './Card.scss';
import like from '../../assets/image/like-icon.svg';
import { Link } from 'react-router-dom';

const Card: React.FC<ITeamItem> = (item) => {
  return (
    <Link
      to={`/${item.id}`}
      className='card__container'
    >
      {/* <button
        className='card__container'
        // onClick={handleClickCard}
      > */}
      <img
        className='card__avatar'
        src={item.avatar}
        alt='Фото сотрудника'
      />
      <p className='card__title'>{item.last_name + ' ' + item.first_name}</p>
      <button
        className='card__btn'
        aria-label='Нравится'
        type='button'
      >
        <img
          className='card__like'
          src={like}
          alt='сердце'
        />
      </button>
      {/* </button> */}
    </Link>
  );
};

export default Card;
