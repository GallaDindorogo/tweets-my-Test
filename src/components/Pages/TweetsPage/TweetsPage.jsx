import { Link } from 'react-router-dom';
import UserCard from 'components/modules/UserCard/UserCard';
import Btn from 'shared/Button/Button';

const TweetsPage = () => {
  const users = [
    {
      user: 'Elon Mask',
      tweets: 777,
      followers: 100500,
      avatar: 'url.jpg',
      id: 1,
    },
    // {
    //   user: 'Keanu Reeves',
    //   tweets: 555,
    //   followers: 800300,
    //   avatar: 'url12.jpg',
    //   id: 2,
    // },
    // {
    //   user: 'Joe Biden',
    //   tweets: 333,
    //   followers: 1000001,
    //   avatar: 'url13.jpg',
    //   id: 3,
    // },
  ];

  return (
    <>
      <h1>TWEETS !!!</h1>
      <div>
        {users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            followers={user.followers}
            // isFollowing={isFollowing}
            // handleFollow={handleFollow}
          />
        ))}
      </div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Btn />
      </Link>
    </>
  );
};

export default TweetsPage;
