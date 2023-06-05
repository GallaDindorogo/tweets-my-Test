export const handleFollow = (userId, users, setUsers) => {
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
