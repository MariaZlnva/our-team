import "./Header.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { IChildren } from "../../redux/types";

export const Header = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="header">
      <div className="header__wrap">
        <button className={
          "header__btn header__btn-back" + ' ' + (location.pathname === "/" &&"header__btn-back_invisible")
        }
          onClick={() => navigate(-1)}
        >
          Назад
        </button>
        <button className="header__btn header__btn-exit">Выход</button>
      </div>
      {children}
    </header>
  );
};

export default Header;
