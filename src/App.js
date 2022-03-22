import './App.css';
import Header from './Header.js';
import UserInfo from './UserInfo';
import PokemonSelections from './PokemonSelections';
import Results from './Results';
import Footer from './Footer.js';
import { useState } from 'react';

function App() {
  
  // User name from UserInfo component
  const [userName, setUserName] = useState('');

  // State for chosen crime
  const [chosenCrime, setChosenCrime] = useState({})

  return (
    <>
      <div className = 'wrapper'>
        <Header />
        <p>Story Element Here?</p>
        <UserInfo
          updateUserName={setUserName}
          currentUserName={userName}
          updateChosenCrime={setChosenCrime}
        />
        <PokemonSelections />
        <Results />
        <Footer />
      </div>
    </>
  );
}

export default App;