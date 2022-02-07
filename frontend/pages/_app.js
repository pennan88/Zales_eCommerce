import "../styles/globals.scss";
import Navigation from "../components/Navigation/Navigation";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";

import styles from "../styles/Home.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className={styles.containerBlock}>
        <div className={styles.outerWrapper}>
          <Navigation />
          <div className={styles.pageWrapper}>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default MyApp;
