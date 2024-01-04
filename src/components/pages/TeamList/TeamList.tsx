import { useEffect, useState } from 'react';
import './TeamList.scss';
import Card from '../../Card/Card';
import Header from '../../Header/Header';
import Main from '../../Main/Main';
import arrow from '../../../assets/image/arrow-down.svg';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { getList } from '../../../redux/teamSlice';

const TeamList: React.FC = () => {
  const dispatch = useAppDispatch();
  const teamList = useAppSelector((state) => state.team.teamList);
  console.log('смотрим teamList при загрузке страницы =>', teamList);
  const [countCardRender, setCountCardRender] = useState(8);

  useEffect(() => {
    console.log('при первом рендере useEffect');
    if (teamList.length === 0) {
      console.log('делаю запрос пользователей с апи');
      dispatch(getList());
    }
  }, []);
  const handleClickBtnMore = () => {
    setCountCardRender(countCardRender + 4);
  };

  const teamListTorender = teamList.slice(0, countCardRender);
  return (
    <div>
      <Header>
        <div className='teamList__header'>
          <h1 className='teamList__title'>Наша команда</h1>
          <p className='teamList__subtitle'>
            Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
            плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.{' '}
          </p>
        </div>
      </Header>
      <Main>
        <div className='teamList__container'>
          <ul className='teamList__list'>
            {teamList
              ? teamListTorender.map((item, index) => (
                  <li
                    className='teamList__item'
                    key={index}
                  >
                    <Card {...item} />
                  </li>
                ))
              : 'упс, тут ничего'}
          </ul>
          {teamListTorender.length < teamList.length ? (
            <button
              className='teamList__btn-more'
              onClick={handleClickBtnMore}
            >
              Показать еще
              <img
                className='teamList__arrow'
                src={arrow}
                alt='стредка вниз'
              />
            </button>
          ) : (
            ''
          )}
        </div>
      </Main>
    </div>
  );
};

export default TeamList;
