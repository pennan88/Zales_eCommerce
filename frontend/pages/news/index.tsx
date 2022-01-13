import style from "./News.module.scss";
import Itemcard from "../../components/itemcard/Itemcard";

const News = ({ data }: any) => {
  console.log(data.data);
  return (
    <div className={[style.newsWrapper, style.grid].join(" ")}>
      {data &&
        data.data.map(({ attributes }: any, index: any) => {
          return (
            <Itemcard
              key={index}
              title={attributes.Name}
              price={attributes.Price}
              description={attributes.Description}
              image={attributes.Image_url}
            />
          );
        })}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/api/clothes");
  const data = await res.json();
  console.log(data);

  return {
    props: { data },
  };
};

export default News;
