import { useEffect, useState } from 'react';
import {Route, Routes} from 'react-router-dom';

import Header from './Header';
import Dummy from './Dummy';
import SolutionsLetters from './SolutionsLetters';
import ErrorLetters from './ErrorLetters';
import Footer from './Footer';
import Form from './Form';

// api
import getWordFromApi from '../services/api';

// styles
import '../styles/App.scss';


function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');
  
  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events

  const handleKeyDown = (ev) => {
    // Sabrías decir para qué es esta línea
    ev.target.setSelectionRange(0, 1);
  };

  const handleChange = (ev) => {
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern
    if (re.test(ev.target.value) || ev.target.value === '') {
      handleLastLetter(ev.target.value);
    }
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className="page">
      <Header></Header>
      <main className="main">
        <section>
          <Routes>
            <Route path='/' element={<SolutionsLetters word={word} userLetters={userLetters} />}>
              {/* <ErrorLetters word={word} userLetters={userLetters}/>
              <Form lastLetter={lastLetter} handleKeyDown={handleKeyDown} handleChange={handleChange} /> */}
            </Route>

            {/* PREGUNTAR ESTO MAÑANA. */}
            
        </Routes>  
        </section>
        <Dummy numberOfErrors={getNumberOfErrors()}></Dummy>
      </main>
      <Footer />
    </div>
  );
}

export default App;