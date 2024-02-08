import Image from "next/image";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <section className={styles.container}> 
      <div className={styles.background}>
        <div className={styles.overlay}></div>
        <div className={styles.background}>
          <Image 
            src="/bg.gif"
            alt="Background"
            fill
            className={styles.backgroundImage}
          />
        </div>

        <div className={styles.dataContainer}>
          <Image 
            src="/sheg.gif" 
            alt="Sheg" 
            width={520}
            height={520}
            className={styles.imageHero}
          />

          <h3 className={styles.subtitle}>Take care of your children</h3>
        </div>
      </div>

      <h1 className={styles.title}>Vadim Scam Page</h1>
    </section>
  );
}

export default Home