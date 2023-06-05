import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <div className={styles.homeBodyWrapper}>
        <div className={styles.homeBody}></div>
        <p className={styles.text}>
          Discover the joy of tracking tweets and managing followers in this
          intuitive project. Let's get started!
        </p>
      </div>
    </>
  );
};

export default HomePage;
