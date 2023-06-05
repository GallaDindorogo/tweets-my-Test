import styles from './Button.module.scss';
import PropTypes from 'prop-types';

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

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
};

export default Btn;
