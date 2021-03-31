import logo from './logo.svg';
import './App.css';
import Fragment from 'react';
import Navigation from './container/Navigation';
import SearchBar from './container/SearchPage';
import MyProfile from './container/MyProfile';
import 'semantic-ui-css/semantic.min.css'
import Profile from './component/Profile'
import MockBusinessApi from './container/MockBusinessApi';

function App() {
  return (
<div>
  <MockBusinessApi/>
</div>
  );
}

export default App;
