import { useSelector } from 'react-redux';

export const UsersList = () => {
  const users = useSelector((state => state.users));

  return (
    <div>
      {users.map((user) => (
        <p>{user}</p>
      ))}
    </div>
  )
}