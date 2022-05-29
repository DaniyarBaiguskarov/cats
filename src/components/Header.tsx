import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation(); ///Извлекаем путь для подсветки
  console.log(location.pathname);
  return (
    <header className="header">
      <ul className="pages">
        <li className={location.pathname == "/cats/" ? "active" : ""}>
          <div className="all">
            <Link to={"/cats/"}>Все котики</Link>
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
