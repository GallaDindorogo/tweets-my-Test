import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <>
      <h1>Welcome to the Home page</h1>
      <svg class="icon icon-Vector-3" width="100px" height="120px">
        <use href="./shared/images/sprite.svg#icon-Vector-3"></use>
      </svg>
    </>
  );
};

export default HomePage;
