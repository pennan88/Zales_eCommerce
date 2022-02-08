import styles from "./Banner.module.scss";

interface iProps {
  Header: string;
}

const Banner = ({ Header }: iProps) => {
  return <div className={styles.container}>{Header}</div>;
};

export default Banner;
