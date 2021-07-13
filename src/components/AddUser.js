import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { addUser } from '../store/actions/usersActions';

export const AddUser = () => {
  const [user, setUser] = useState('old value');
  const dispatch = useDispatch();

  const inputChangeHandler = (event) => {
    setUser(event.target.value);
  }

  const buttonClickHandler = useCallback(() => {
    dispatch(addUser(user));
  }, [dispatch, user]);

  return (
    <div>
      <input type="text" onChange={inputChangeHandler} />
      <button onClick={buttonClickHandler}>Add user</button>
    </div>
  )
}