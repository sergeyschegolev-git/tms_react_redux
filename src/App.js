import logo from './logo.svg';
import './App.css';
import { AddUser } from './components/AddUser';
import { UsersList } from './components/UsersList';
import { AddTag } from './components/AddTag';
import { TagsList } from './components/TagsList';

function App() {
  return (
    <>
      <h3>Users Section</h3>
      <div className="users-section">
        <AddUser />
        <UsersList />
      </div>
    </>
  );
}

export default App;
