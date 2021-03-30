import logo from './logo.svg';
import './App.css';
import Fragment from 'react';
import Navigation from './container/Navigation';
import SearchBar from './container/SearchPage';
import BusinessProfile from './container/BusinessProfile';
import MockBusinessApi from './container/MockBusinessApi';


function App() {
  return (
  <div> 
   <MockBusinessApi/>
  </div>
  );
}

export default App;
