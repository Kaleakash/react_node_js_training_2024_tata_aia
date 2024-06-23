import Image from "next/image";
import styles from "./page.module.css";

function Home() {
  console.log("home component server side console")
  return (
    <main className={styles.main}>
      
      <h2>Welcome to Next JS Framework</h2>

    </main>
  );
}

export default Home;