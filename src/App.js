import { AddUser } from './components/AddUser';
import { UsersList } from './components/UsersList';
import { AddTag } from './components/AddTag';
import { TagsList } from './components/TagsList';
import './App.css';

function App() {
  return (
    <>
      <h3>User section</h3>
      <div className="users-section">
        <AddUser />
        <UsersList />
      </div>
      <h3>Tags section</h3>
      <div className="tags-section">
        <AddTag />
        <TagsList />
      </div>
    </>
  );
}

export default App;
