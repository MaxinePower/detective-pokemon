import './App.css';
import Header from './Header.js';
import UserInfo from './UserInfo';
import PokemonSelections from './PokemonSelections';
import Results from './Results';
import Footer from './Footer.js';

function App() {
  return (
    <>
      <div className = 'wrapper'>
        <Header />;
        <p>Story Element Here?</p>
        <UserInfo />;
        <PokemonSelections />;
        <Results />;
        <Footer />;
      </div>
    </>
  );
}

export default App;