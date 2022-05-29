import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Cat, { ICat } from "../components/Cat";

const Home: React.FC = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetchCats();
  }, []);
  function fetchCats() {
    (async function () {
      try {
        axios.defaults.headers.common["x-api-key"] =
          "8f2d513f-7d99-443d-a2ae-8b0393a36e07";
        const response = await axios.get<ICat[]>(
          "https://api.thecatapi.com/v1/images/search",
          { params: { limit: 15, size: "full", page: page } }
        );
        setPage(page + 1);
        setCats(cats.concat(response.data));
        setIsLoaded(true);
      } catch (e) {
        alert(e);
      }
    })();
  }

  return (
    <>
      {isLoaded && (
        <>
          <InfiniteScroll
            dataLength={cats.length}
            next={fetchCats}
            hasMore={true}
            loader
          >
            {" "}
            {cats.map((item, index) => (
              <Cat {...item} key={`${item}_${index}`} />
            ))}
          </InfiniteScroll>
          <div className="loadMore">
            <p>...загружаем ещё котиков...</p>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
