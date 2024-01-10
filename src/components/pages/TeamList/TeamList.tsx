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
  const [countCardRender, setCountCardRender] = useState(0);
  const windowInnerWidth = window.innerWidth;

  useEffect(() => {
    if (teamList.length === 0) {
      dispatch(getList());
    }
  }, []);

  useEffect(() => {
    //  меняет стейт перемен. при увелич. ширины экрана
    if (windowInnerWidth > 768) {
      setCountCardRender(8);
    }
    else if (windowInnerWidth <=768){
      setCountCardRender(4);

    }
    function handleResize() {
      if (windowInnerWidth > 768) {
        setCountCardRender(8);
      }
      if (windowInnerWidth <=768){
        setCountCardRender(4);

      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, [windowInnerWidth]);

  const handleClickBtnMore = () => {
    if (windowInnerWidth > 768) {
      setCountCardRender(countCardRender + 4);
    }
   if (windowInnerWidth <=768){
      setCountCardRender(countCardRender + 2);
    }
  };

  const teamListTorender = teamList.slice(0, countCardRender);

  return (
    <div className='teamList'>
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
