import styles from './UserCard.module.scss';

const UserCard = ({ user, followers, isFollowing, handleFollow }) => {
  return (
    <>
      <div className={styles.tweetCard}>
        <div className={styles.svgContainer}></div>
        <div className={styles.divider}>
          <img src={user.avatar} alt="User Avatar" />
        </div>

        <div className={styles.infoBlockWrapper}>
          <div className={styles.infoBlock}>
            <p className={styles.text}>{user.tweets} TWEETS</p>

            <p className={styles.text}>{followers} FOLLOWERS</p>

            <button onClick={handleFollow}>
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </div>
      <h3>Name {user.user}</h3>
    </>
  );
};

export default UserCard;
