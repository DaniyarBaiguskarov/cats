import React, { useState } from "react";
import Cat, { ICat } from "../components/Cat";

const Favorite: React.FC = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  ///функция, которая проходится по localStorage и помещает массив котиков в состояние
  function setFavoriteCats() {
    let emptyCats: ICat[] = []; ///создаем пустой массив
    for (let i = 0; i < localStorage.length; i++) {
      ///проходимся по localStorage
      let key = localStorage.key(i);

      emptyCats.push({ id: key, url: localStorage.getItem(key) }); ///добавляем в массив данные из localeStorage
    }
    setCats(emptyCats); ///помещаем полученный массив в состояние
  }
  ///первичная загрузка котиков при открытии страницы
  React.useEffect(() => {
    setFavoriteCats();
  }, []);
  ///создаем слушатель событий, который будет срабатывать при удалении/добавлении данных в localStorage
  React.useEffect(() => {
    ///
    window.addEventListener("storage", setFavoriteCats);
    return () => {
      window.removeEventListener("storage", setFavoriteCats);
    };
  }, []);

  return (
    <div className="container">
      {" "}
      {cats.map((item, index) => (
        <Cat {...item} key={`${item}_${index}`} />
      ))}
    </div>
  );
};

export default Favorite;
