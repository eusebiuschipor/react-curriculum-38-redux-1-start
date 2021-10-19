import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Auth />
      <UserProfile />
      <Counter />
    </>
  );
}

export default App;
