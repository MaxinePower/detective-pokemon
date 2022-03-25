import './App.css';
import Header from './Header.js';
import UserInfo from './UserInfo';
import PokemonSelections from './PokemonSelections';
// import Results from './Results';
// import InvestigationAlgorithm from './InvestigationAlgorithm';
import Footer from './Footer.js';
import { useState } from 'react';

function App() {
  // User name from UserInfo component
  const [userName, setUserName] = useState('');
  // State for chosen crime
  const [chosenCrimeType, setChosenCrimeType] = useState('');
  const [chosenCaseNum, setChosenCaseNum] = useState('');

  return (
    <>
      <div className = 'wrapper'>
        <Header />
        <p>Story Element Here?</p>
        <UserInfo
          updateUserName={setUserName}
          currentUserName={userName}
          updateChosenCrimeType={setChosenCrimeType}
          updateChosenCaseNum={setChosenCaseNum}
        />
        {
          chosenCrimeType !== ""
        ? <PokemonSelections selectedCrime={chosenCrimeType}/>
        : null
        }
        {/* <Results /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;