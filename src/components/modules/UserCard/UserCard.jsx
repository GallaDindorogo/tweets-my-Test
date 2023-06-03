import styles from './UserCard.module.scss';
import Btn from '../../../shared/Button/Button';
import LogoIcon from 'shared/icons/LogoIcon';

const UserCard = ({ user, tweets, followers, isFollowing, handleFollow }) => {
  return (
    <>
      <div className={styles.wrapperTweetCard}>
        <div className={styles.tweetCard}>
          <div className={styles.svgContainer}>
            <span className={styles.Logo}>
              <LogoIcon />
            </span>
          </div>
          <div className={styles.divider}>
            <div className={styles.avatar}>
              <span className={styles.avatar_user}>
                <img
                  src={user.avatar}
                  alt="User Avatar"
                  className={styles.avatarImage}
                />
              </span>
            </div>
          </div>

          <div className={styles.infoBlockWrapper}>
            <div className={styles.infoBlock}>
              <p className={styles.textUser}>{user.user}</p>
              <p className={styles.text}>{tweets} TWEETS</p>
              <p className={styles.text}>{followers} FOLLOWERS</p>
              <div>
                <Btn onClick={handleFollow} active={isFollowing}>
                  {isFollowing ? 'Following' : 'Follow'}
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
