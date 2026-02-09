import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <p>Welcome to our shop!</p>
        <button>Shop now!</button>
      </div>
    </div>
  );
};

export default Home;
