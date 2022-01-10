import Navigation from "../Navigation/Navigation";
import styles from "./Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={styles.containerWrapper}>
      <Navigation />
      <div className={"test"}>{children}</div>
    </div>
  );
};

export default Layout;
