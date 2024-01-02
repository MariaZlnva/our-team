import { useEffect } from "react";
import "./TeamList.scss";
import Card from "../../Card/Card";
import Header from "../../Header/Header";
import Main from "../../Main/Main";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { getList } from "../../../redux/teamSlice";

const TeamList: React.FC = () => {
  const dispatch = useAppDispatch();
  const teamList = useAppSelector((state) => state.team.teamList);
  console.log(teamList);

  useEffect(() => {
    console.log("useEffect - запрос");
    if (teamList.length === 0) {
      dispatch(getList())
    }
    
  }, []);

  return (
    <div>
      <Header>
        <div className="teamList__header">
          <h1 className="teamList__title">Наша команда</h1>
          <p className="teamList__subtitle">
            Это опытные специалисты, хорошо разбирающиеся во всех задачах,
            которые ложатся на их плечи, и умеющие находить выход из любых, даже
            самых сложных ситуаций.{" "}
          </p>
        </div>
      </Header>
      <Main>
        <ul>
          {teamList
            ? teamList.map((item, index) => (
                <li key={index}>
                  <Card {...item} />
                </li>
              ))
            : "упс, тут ничего"}
        </ul>
        <button>Показать еще</button>
      </Main>
    </div>
  );
};

export default TeamList;
