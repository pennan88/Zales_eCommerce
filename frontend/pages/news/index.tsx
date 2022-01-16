import style from "./News.module.scss";
import Itemcard from "../../components/itemcard/Itemcard";

const News = ({ data }: any) => {
  return (
    <div className={[style.newsWrapper, style.grid].join(" ")}>
      {data &&
        data.map(({ attributes }: any, index: any) => {
          return (
            <Itemcard
              key={index}
              slug={attributes.Slug}
              title={attributes.Name}
              price={attributes.Price}
              description={attributes.Description}
              image={`http://localhost:1337${attributes.Image.data.attributes.url}`}
            />
          );
        })}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:1337/api/clothes/?populate=*");
  const data = await res.json();
  console.log(data);

  return {
    props: { data: data.data },
  };
};

export default News;
