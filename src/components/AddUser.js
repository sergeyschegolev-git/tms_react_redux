import { useDispatch } from 'react-redux';
import { addUser as addUserAction } from '../store/actions/usersActions';
import { useCallback, useState } from 'react';

export const AddUser = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const buttonClickHandler = useCallback(() => {
    dispatch(addUserAction(userName))
  }, [dispatch, userName])

  const inputChangeHandler = useCallback((event) => {
    setUserName(event.target.value);
  }, [])

  return (
    <div>
      <input onChange={inputChangeHandler} type="text" />
      <button onClick={buttonClickHandler}>Add user</button>
    </div>
  )
}
