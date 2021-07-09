import { connect } from 'react-redux';
import { addTag as addTagAction } from '../store/actions/tagsActions';
import { useCallback, useState } from 'react';

export const AddTagComponent = ({ addTag }) => {
  const [tag, setTag] = useState('');

  const changeHandler = useCallback((event) => {
    setTag(event.target.value);
  }, []);

  const clickHandler = useCallback(() => {
    addTag(tag);
  }, [addTag, tag]);

  return (
    <div>
      <input onChange={changeHandler} type="text" />
      <button onClick={clickHandler}>Add tag</button>
    </div>
  )
};

const mapDispatchToProps = () => ({
  addTag: addTagAction,
})

export const AddTag = connect(null, mapDispatchToProps)(AddTagComponent)
