import { useEffect } from "react";
import "./TeamItem.scss";
import mail from "../../../assets/image/mail-icon.svg";
import phone from "../../../assets/image/phone-icon.svg";
import Header from "../../Header/Header";
import Main from "../../Main/Main";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { getDataUser } from "../../../redux/memberSlice";
import { useParams } from "react-router-dom";

const TeamItem: React.FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.member.member);

  useEffect(() => {
    if (id) dispatch(getDataUser(id));
  }, []);

  return (
    <div className="teamItem">
      <Header>
        <div className="teamItem__header">
          <img
            className="teamItem__avatar"
            src={member.avatar}
            alt="Фото сотрудника"
          />
          <div className="teamItem__wrap">
            <h1 className="teamItem__title">
              {member.last_name + " " + member.first_name}
            </h1>
            <p className="teamItem__subtitle">Партнер</p>
          </div>
        </div>
      </Header>
      <Main>
        <div className="teamItem__container">
          <div className="teamItem__description">
            <p className="teamItem__paragraph">
              Клиенты видят в нем эксперта по вопросам разработки комплексных
              решений финансовых продуктов, включая такие аспекты, как
              организационная структура, процессы, аналитика и ИТ-компоненты. Он
              помогает клиентам лучше понимать структуру рисков их бизнеса,
              улучшать процессы за счет применения новейших технологий и
              увеличивать продажи, используя самые современные аналитические
              инструменты.
            </p>

            <p className="teamItem__paragraph">
              В работе с клиентами недостаточно просто решить конкретную
              проблему или помочь справиться с трудностями. Не менее важно
              уделять внимание обмену знаниями: "Один из самых позитивных
              моментов — это осознание того, что ты помог клиенту перейти на
              совершенно новый уровень компетентности, уверенность в том, что
              после окончания проекта у клиента есть все необходимое, чтобы
              дальше развиваться самостоятельно".
            </p>

            <p className="teamItem__paragraph">
              Помимо разнообразных проектов для клиентов финансового сектора,
              Сорин ведет активную предпринимательскую деятельность. Он является
              совладельцем сети клиник эстетической медицины в Швейцарии,
              предлагающей инновационный подход к красоте, а также инвестором
              других бизнес-проектов.
            </p>
          </div>

          <ul className="teamItem__contact">
            <li className="teamItem__contact-item">
              <img
                className="teamItem__contact-img"
                src={phone}
                alt="Телефонная трубка"
              />
              <p>+7 (954) 333-44-55</p>
            </li>
            <li className="teamItem__contact-item">
              <img className="teamItem__contact-img" src={mail} alt="Конверт" />
              <p>{member.email}</p>
            </li>
          </ul>
        </div>
      </Main>
    </div>
  );
};

export default TeamItem;
