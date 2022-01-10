import Navigation from "../Navigation/Navigation";
import styles from "./Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={styles.containerBlock}>
      <div className={styles.containerWrapper}>
        <Navigation />
        <div className={styles.pageWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
