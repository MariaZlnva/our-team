import Header from "../../Header/Header";
import Main from "../../Main/Main";

const TeamItem: React.FC = () => {
  return (
    <div>
      <Header>
        <div>
            <img src="#" alt="Фото сотрудника"/>
            <h1>Фамилия Имя</h1>
            <p>Партнер</p>
        </div>
      </Header>
      <Main>
<div>
    <p></p>
    <ul>
        <li>телефон</li>
        <li>email</li>
    </ul>
</div>
      </Main>
    </div>
  );
}

export default TeamItem;