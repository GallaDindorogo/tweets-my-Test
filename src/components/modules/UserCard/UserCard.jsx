import styles from './UserCard.module.scss';
import Btn from '../../../shared/Button/Button';

const UserCard = ({
  user,
  tweets,
  followers,
  avatar,
  isFollowing,
  handleFollow,
}) => {
  return (
    <>
      <div className={styles.tweetCard}>
        <div className={styles.svgContainer}></div>
        <div className={styles.divider}>
          <div className={styles.avatar}>
            {/* <svg className={styles.avatar_user}>
              <use href="../../../shared/images/avatar.svg"></use>
            </svg> */}
            <img
              className={styles.avatar_user}
              src={avatar}
              width="80"
              alt="User Avatar"
            />
          </div>
        </div>

        <div className={styles.infoBlockWrapper}>
          <div className={styles.infoBlock}>
            <p className={styles.text}>{tweets} TWEETS</p>

            <p className={styles.text}>{followers} FOLLOWERS</p>

            <Btn onClick={handleFollow}>
              {isFollowing ? 'Following' : 'Follow'}
            </Btn>
          </div>
        </div>
      </div>
      <h3>Name {user.user}</h3>
    </>
  );
};

export default UserCard;
