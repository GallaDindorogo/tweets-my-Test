import styles from './Button.module.scss';

const Btn = ({ children, onClick, active }) => {
  return (
    <div className={styles.ButtonContainer}>
      <button
        type="button"
        onClick={onClick}
        className={`${styles.Button} ${active ? styles.active : ''}`}
      >
        {children}
      </button>
    </div>
  );
};
export default Btn;
