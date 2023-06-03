import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './TweetsPage.module.scss';

import UserCard from 'components/modules/UserCard/UserCard';
import Btn from 'shared/Button/Button';

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [tweetsPerPage] = useState(3);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get(
          'https://640dee65b07afc3b0dba3c72.mockapi.io/users'
        );
        const savedUsers = JSON.parse(localStorage.getItem('users'));
        if (savedUsers) {
          setUsers(savedUsers);
        } else {
          setUsers(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTweets();
  }, []);

  const handleFollow = userId => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.map(user =>
        user.id === userId
          ? {
              ...user,
              isFollowing: !user.isFollowing,
              followers: user.isFollowing
                ? user.followers - 1
                : user.followers + 1,
            }
          : user
      );
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  const indexOfLastTweet = currentPage * tweetsPerPage;
  const currentTweets = users.slice(0, indexOfLastTweet);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <div className={styles.wrapperTweetsPage}>
        {currentTweets.map(user => (
          <UserCard
            key={user.id}
            user={user}
            avatar={user.avatar}
            tweets={user.tweets}
            followers={user.followers}
            isFollowing={user.isFollowing}
            handleFollow={() => handleFollow(user.id)}
          />
        ))}
      </div>
      <div className={styles.loadMoreWrapper}>
        {users.length > indexOfLastTweet && (
          <p onClick={handleLoadMore}>Load More...</p>
        )}
      </div>
      <div className={styles.goBackWrapper}>
        <Link to="/">
          <Btn>Go back</Btn>
        </Link>
      </div>
    </>
  );
};

export default TweetsPage;
