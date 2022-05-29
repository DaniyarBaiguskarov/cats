import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); ///Извлекаем путь для подсветки

  return (
    <header className="header">
      <ul className="pages">
        <li className={location.pathname == "/" ? "active" : ""}>
          <div className="all">
            <Link to={"/"}>Все котики</Link>
          </div>
        </li>
        <li className={location.pathname == "/favorite" ? "active" : ""}>
          <div className="favorite">
            <Link to={"/favorite"}>Любимые котики</Link>
          </div>
        </li>
      </ul>
    </header>
  );
};

export default Header;
