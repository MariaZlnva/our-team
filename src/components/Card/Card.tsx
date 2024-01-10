import { ITeamItem } from '../../redux/types';
import './Card.scss';
import like from '../../assets/image/like-icon.svg';
import activeLike from '../../assets/image/activeLike-icon.svg';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { toggleLike } from '../../redux/teamSlice';

const Card: React.FC<ITeamItem> = (item) => {
  const dispatch = useAppDispatch();

  const handleLike = () => {
    dispatch(toggleLike(item.id));
  }
  return (
    <div
      className='card__container'
    >
      <img
        className='card__avatar'
        src={item.avatar}
        alt='Фото сотрудника'
      />
      <Link
      to={`/${item.id}`} className='card__title'> <p >{item.last_name + ' ' + item.first_name}</p></Link>
      <button
        className='card__btn'
        aria-label='Нравится'
        type='button'
        onClick={handleLike}
      >
        <img
          className='card__like'
          src={item.isLiked ? activeLike : like}
          alt='сердце'
        />
      </button>
    </div>
  );
};

export default Card;
