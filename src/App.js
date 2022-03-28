import './App.css';
import Header from './components/Header'
import Introduction from './components/Introduction';
import UserInfo from './components/UserInfo';
import PokemonSelections from './components/PokemonSelections';
import Results from './components/Results';
import Footer from './components/Footer.js';
import { useState } from 'react';

function App() {
  // User name from UserInfo component
  const [userName, setUserName] = useState('');
  // State for chosen crime
  const [chosenCrimeType, setChosenCrimeType] = useState('');
  const [chosenCaseNum, setChosenCaseNum] = useState('');
  const [pType, setPType] = useState('');

  return (
    <>
      <div className = 'wrapper'>
        <Header />

        <Introduction />

        <UserInfo
          updateUserName={setUserName}
          currentUserName={userName}
          updateChosenCrimeType={setChosenCrimeType}
          updateChosenCaseNum={setChosenCaseNum}
        />
        {
          chosenCrimeType !== ""
          ? <PokemonSelections selectedCrime={chosenCrimeType} setPType={setPType} />
          : null
        }

        <Results
        crimeCaseNumber={chosenCaseNum}
        crimeType={chosenCrimeType}
        pokiType={pType}
        />
      </div>
        <Footer />
    </>
  );
}

export default App;