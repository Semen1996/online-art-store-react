import { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Popup from './Popup';
import initialCards from '../utils/initial-cards';

function App() {

  const [cards, setCards] = useState(initialCards);
  const [isPopOpen, setIsPopOpen] = useState(false);
  const [cardPopup, setCardPopup] = useState(initialCards[0]);
  const [displayCards, setDisplayCards] = useState([]);

  useEffect(() => {
    const displays = initialCards.map((item, i) => {
      return 'block';
    });
    setDisplayCards(displays);
  },[]);

  function changeDisplayCards(displays) {
    setDisplayCards(displays);
  }

  function handleOnCard(card) {
    setIsPopOpen(true);
    setCardPopup(card);
  }

  function closePopup() {
    setIsPopOpen(false);
  }

  return (
      <div className="page">
        <Header cards={cards} changeDisplayCards={changeDisplayCards} />
        <Main cards={cards} openPopup={handleOnCard} displayCards={displayCards} />
        <Footer />
        <Popup isOpen={isPopOpen} closePopup={closePopup} card={cardPopup} cards={cards}/>
      </div>
  );
}

export default App;