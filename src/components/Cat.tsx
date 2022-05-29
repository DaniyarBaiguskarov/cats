import React, { useState } from "react";

export interface ICat {
  id: string;
  url: string;
}

const Cat: React.FC<ICat> = ({ id, url }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    !!localStorage.getItem(id)
  );
  function handleToFavorite() {
    isFavorite === false
      ? (localStorage.setItem(id, url), setIsFavorite(true))
      : (localStorage.removeItem(id),
        window.dispatchEvent(new Event("storage")),
        setIsFavorite(false)); ///так как событие вызывается только при изменении localStorage на другой странице, вызываем его самостоятельно. Иначе страница с любимыми котиками не будет обновлять свое состояние
  }
  return (
    <div className="image-wrap">
      <img className="image" src={url}></img>
      {!!isFavorite ? (
        <div className="heart" onClick={handleToFavorite} />
      ) : (
        <div className="heart-white" onClick={handleToFavorite} />
      )}
    </div>
  );
};

export default Cat;
