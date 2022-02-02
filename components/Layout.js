import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Art Fun",
  description: "Find Art exhibition events",
  keywords: "art galleries, art event, painting exhibition",
};
