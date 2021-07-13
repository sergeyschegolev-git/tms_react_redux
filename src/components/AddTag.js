import { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { addTag as addTagAction } from '../store/actions';

export const AddTagComponent = ({ addTag }) => {
  const [tag, setTag] = useState('');

  const inputChangeHandler = (event) => {
    setTag(event.target.value);
  }

  const buttonClickHandler = useCallback(() => {
    addTag(tag)
  }, [addTag, tag]);

  return (
    <div>
      <input type="text" onChange={inputChangeHandler} />
      <button onClick={buttonClickHandler}>Add Tag</button>
    </div>
  )
}

const mapDispatchToProps = {
  addTag: addTagAction,
}

export const AddTag = connect(null, mapDispatchToProps)(AddTagComponent);
