import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFilter } from 'redux/Filter/selector';
import styles from './TweetsPage.module.scss';
import UserCard from 'components/modules/UserCard/UserCard';
import Btn from 'shared/Button/Button';
import Filter from 'components/modules/Filter/Filter';
import { fetchTweets, handleFollow, handleLoadMore } from 'shared/utils';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tweetsPerPage] = useState(3);
  const { filterOption } = useSelector(getFilter);

  useEffect(() => {
    fetchTweets(setUsers);
  }, []);

  const indexOfLastTweet = currentPage * tweetsPerPage;
  const currentTweets = users.slice(0, indexOfLastTweet);

  const filteredTweets = currentTweets.filter(tweet => {
    if (filterOption === 'show all') {
      return true;
    } else if (filterOption === 'followings') {
      return tweet.isFollowing;
    } else if (filterOption === 'follow') {
      return !tweet.isFollowing;
    } else {
      return true;
    }
  });

  return (
    <>
      <div className={styles.wrapperTweetsPageButtons}>
        <div className={styles.goBackWrapper}>
          <Link to="/">
            <Btn>Go back</Btn>
          </Link>
        </div>
        <Filter />
      </div>

      <div className={styles.wrapperTweetsPage}>
        {filteredTweets.map(user => (
          <UserCard
            key={user.id}
            user={user}
            avatar={user.avatar}
            tweets={user.tweets}
            followers={user.followers}
            isFollowing={user.isFollowing}
            handleFollow={() => handleFollow(user.id, users, setUsers)}
          />
        ))}
      </div>
      <div className={styles.loadMoreWrapper}>
        {users.length > indexOfLastTweet && (
          <Btn onClick={() => handleLoadMore(setCurrentPage)}>Load More...</Btn>
        )}
      </div>
    </>
  );
};

export default TweetsPage;
