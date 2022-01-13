import "../styles/globals.scss";
import Navigation from "../components/Navigation/Navigation";

import styles from "../styles/Home.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.containerBlock}>
      <div className={styles.outerWrapper}>
        <Navigation />
        <div className={styles.pageWrapper}>
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}

export default MyApp;
