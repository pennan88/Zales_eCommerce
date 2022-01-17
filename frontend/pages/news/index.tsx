import style from "./News.module.scss";
import Itemcard from "../../components/itemcard/Itemcard";
import { AnimatePresence, motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const News = ({ data }: any) => {
  return (
    <>
      <AnimatePresence initial={true}>
        <motion.div
          className={[style.newsWrapper].join(" ")}
          exit={{ opacity: 1 }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <motion.div variants={stagger} className={style.grid}>
            {data &&
              data.map(({ attributes }: any, index: any) => {
                return (
                  <Itemcard
                    key={index}
                    slug={attributes.Slug}
                    title={attributes.Name}
                    price={attributes.Price}
                    description={attributes.smallDescription}
                    image={`http://localhost:1337${attributes.Image.data.attributes.url}`}
                  />
                );
              })}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
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
