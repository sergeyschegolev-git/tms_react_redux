import { connect } from 'react-redux';

export const TagsListComponent = ({ tags }) => {
  return (
    <div>
      {tags.map((tag) => (
        <p>{tag}</p>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  tags: state.tags
})

export const TagsList = connect(mapStateToProps)(TagsListComponent);
