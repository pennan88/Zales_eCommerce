import { AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation/Navigation";
import "../styles/globals.scss";
import styles from "../styles/Home.module.scss";
import { store } from "../lib/redux/app/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: any) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Provider store={store}>
        <div className={styles.containerBlock}>
          <div className={styles.outerWrapper}>
            <Navigation />
            <div className={styles.pageWrapper}>
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      </Provider>
    </AnimatePresence>
  );
}

export default MyApp;
