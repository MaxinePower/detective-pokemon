import './App.css';
import Header from './Header.js';
import chatBubble from './assets/Speech-Bubble.png'
import UserInfo from './UserInfo';
import PokemonSelections from './PokemonSelections';
import Results from './Results';
// import InvestigationAlgorithm from './InvestigationAlgorithm';
import Footer from './Footer.js';
import { useState } from 'react';

function App() {
  // User name from UserInfo component
  const [userName, setUserName] = useState('');
  // State for chosen crime
  const [chosenCrimeType, setChosenCrimeType] = useState('');
  const [chosenCaseNum, setChosenCaseNum] = useState('');
  const [pType, setPType] = useState("");

  return (
    <>
      <div className = 'wrapper'>
        <Header />
        <div className = 'introduction'>
          <img className = 'bubble' src={chatBubble} alt=''></img>
          <div className = 'openingText'>
            <p>Hello there! Welcome to the Scotland Yard’s Pokémon Investigation Unit. This special unit solves crimes with the help of Pokémon. These Pokémon are specially trained and qualified to assist PIU detectives with their cases.</p>
            <p>Oh! I see you don’t have your PIU ID with you – it must be your first day as a Detective! Congratulations! Let me help you get your ID set up. Can you give me your name?</p>        
          </div>
        </div>
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