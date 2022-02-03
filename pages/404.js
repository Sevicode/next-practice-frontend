import Layout from "@/components/Layout";
import Link from "next/link";
import styles from "@/styles/404.module.css";
// import { FaExclamationTriangle } from "react-icons/";

export default function PageNotFound() {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          {/* <FaExclamationTriangle /> */}
          404
        </h1>
        <h4>Sorry, there is nothing to show</h4>
        <Link href="./">Go Back Home</Link>
      </div>
    </Layout>
  );
}