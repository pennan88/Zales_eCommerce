import style from "./News.module.scss";
import Itemcard from "../../components/itemcard/Itemcard";

const News = () => {
  return (
    <div className={[style.newsWrapper, style.grid].join(" ")}>
      <Itemcard />
      <Itemcard />
      <Itemcard />
      <Itemcard />
    </div>
  );
};

export default News;
