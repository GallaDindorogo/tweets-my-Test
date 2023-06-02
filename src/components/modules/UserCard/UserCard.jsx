import styles from './UserCard.module.scss';
import Btn from '../../../shared/Button/Button';
import LogoIcon from 'shared/icons/LogoIcon';
import Avatar from 'shared/icons/Avatar';

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
        <div className={styles.svgContainer}>
          <span className={styles.Logo}>
            <LogoIcon />
          </span>
        </div>
        <div className={styles.divider}>
          <div className={styles.avatar}>
            <span className={styles.avatar_user}>
              <Avatar />
            </span>
          </div>
        </div>

        <div className={styles.infoBlockWrapper}>
          <div className={styles.infoBlock}>
            <p className={styles.text}>{tweets} TWEETS</p>
            <p className={styles.text}>{followers} FOLLOWERS</p>
            <div>
              <Btn onClick={handleFollow}>
                {isFollowing ? 'Following' : 'Follow'}
              </Btn>
              <span>{followers.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      <h3>Name {user.user}</h3>
    </>
  );
};

export default UserCard;
