import './App.css';
import Header from './components/Header'
import Introduction from './components/Introduction';
import UserInfo from './components/UserInfo';
import PokemonSelections from './components/PokemonSelections';
import Results from './components/Results';
import Footer from './components/Footer.js';
import { useState, useRef, useEffect } from 'react';

function App() {
  // User name from UserInfo component
  const [userName, setUserName] = useState('');
  // State for chosen crime
  const [chosenCrimeType, setChosenCrimeType] = useState('');
  const [chosenCaseNum, setChosenCaseNum] = useState('');
  const [pType, setPType] = useState('');
  const [showPokemonSection, setShowPokemonSection] = useState(false);
  const [showResultsSection, setShowResultsSection] = useState(false);

  const pokemonRef = useRef(null);
  useEffect(() => {
    if (showPokemonSection) {
      pokemonRef.current.scrollIntoView();
    }
  }, [showPokemonSection]);

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
          pokemonState={setShowPokemonSection}
        />
        <div ref={pokemonRef}>
          {
            chosenCrimeType !== ""
            ? <PokemonSelections selectedCrime={chosenCrimeType} setPType={setPType} showResultsSectionState={setShowResultsSection} />
            : null
          }
        </div>
        <Results
          crimeCaseNumber={chosenCaseNum}
          crimeType={chosenCrimeType}
          pokiType={pType}
          detectiveName={userName}
          showMeTheResults={showResultsSection}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;