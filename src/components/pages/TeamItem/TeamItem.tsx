import { useEffect } from 'react';
import Header from '../../Header/Header';
import Main from '../../Main/Main';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { getDataUser } from '../../../redux/memberSlice';
import { useParams } from 'react-router-dom';

const TeamItem: React.FC = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.member.member);

  useEffect(() => {
    console.log('при первом рендере карточки useEffect делаю запрос сотрудника');
    if (id) dispatch(getDataUser(id));
  }, []);

  return (
    <div>
      <Header>
        <div>
          <img
            src={member.avatar}
            alt='Фото сотрудника'
          />
          <h1>{member.last_name + ' ' + member.first_name}</h1>
          <p>Партнер</p>
        </div>
      </Header>
      <Main>
        <div>
          <p></p>
          <ul>
            <li>телефон</li>
            <li>{member.email}</li>
          </ul>
        </div>
      </Main>
    </div>
  );
};

export default TeamItem;
