import { ITeamItem } from "../../redux/types";


const Card: React.FC<ITeamItem> = (item) => {
    return (
      <div>
       <img src={item.avatar} alt="Фото сотрудника"/>
       <p>{item.last_name + " " + item.first_name}</p>
       <button aria-label="Нравится" type="button"></button>
      </div>
    );
  };
  
  export default Card;
  