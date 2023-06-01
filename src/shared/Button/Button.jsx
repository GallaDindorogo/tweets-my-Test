import styles from './Button.module.scss';

const Btn = ({ children, type = 'submit' }) => {
  return (
    <div className={styles.ButtonContainer}>
      <button type={type} className={styles.Button}>
        {children}
      </button>
    </div>
  );
};

export default Btn;
