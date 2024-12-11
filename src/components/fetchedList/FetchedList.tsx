import { useEffect, useState } from "react";
import "./FetchedList.css";
import { INews } from "../../interfaces/INews";
import Loader from "../loader/Loader";

interface PropsFetchedList {
  URL: string;
}

const FetchedList: React.FC<PropsFetchedList> = (props) => {
  const [data, setData] = useState<null | INews>(null);

  useEffect(() => {
    fetch(props.URL)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Response doesnt work", err));
  }, [data, props.URL]);

  return (
    <section className="section-fetchedList flex">
      {data ? (
        data.articles.map((article, index) => (
          <div key={index} className="card flex">
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <p>{article.description}</p>

            {article.urlToImage && (
              <img src={article.urlToImage} alt="news-image" />
            )}
            <button className="cardBtn">
              <a href={article.url}>Read More</a>
            </button>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default FetchedList;
