import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import CardGrid from './components/CardGrid.jsx'

function App() {
  const [cards , setCards] = useState([]); //Array of cards
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    initializeGame(); //Initialize the game
  }, []);

  const  initializeGame = () => {
    const initialCards = [
      {id: 1, name: "Naruto Uzumaki", image: "/src/assets/naruto-Uzumaki.jpg"},
      {id: 2, name: "Kakashi Hatake", image: "src/assets/Kakashi Hatake.jpg"},
      {id: 3, name: "Lady Tsunade", image: "src/assets/Lady Tsunade.jpg"},
      {id: 4, name: "Shisui-Uchiha", image: "src/assets/Shisui-Uchiha.jpg"},
      {id: 5, name: "Sasuke Uchiha", image: "src/assets/Sasuke Uchiha.jpg"},
      {id: 6, name: "Shikamaru Nara", image: "src/assets/Shikamaru Nara.jpg"},
      {id: 7, name: "Isshiki Ōtsutsuki", image: "src/assets/Isshiki Ōtsutsuki.jpg"},
      {id: 8, name: "Nagato", image: "src/assets/Nagato.jpg"},
      {id: 9, name: "Might-Guy", image: "src/assets/Might-Guy.jpg"},
      {id: 10, name: "Code", image: "src/assets/Code.jpg"},
    ];

    setCards(shuffle(initialCards));
  };

  // Fisher-Yates Shuffle Algorithm for the cards
  const shuffle = (array) => {
    // Loop through array starting at the last index
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index from 0 - i
      const j = Math.floor(Math.random() * (i + 1));

      // Swap elements at indexes i and j
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const handleCardClick = (selectedCard) => {
    // Check if card has already been selected
    if (selectedCard.selected || selectedCards.includes(selectedCard.id)) {
      console.log(`Please don't click me again!`, selectedCard.selected);
      // Handle when player clicks the same card twice
      handleWrongSelection();
    } else {
      // Update the selected card"s state
      const updateCards = cards.map((card) => {
        if (card === selectedCard) {
          console.log(selectedCard.selected);
          return {...card, selected: true};
        }
        return card;
      });

      setCards(updateCards);
      setSelectedCards([...selectedCards, selectedCard.id]);
      setScore(score + 1);
      if (score >= 10) {
        setBestScore(score);
        setScore(0);
      }
    }

    setCards(shuffle(cards));
  };

  const handleWrongSelection = () => {
    setSelectedCards([]);
    handleBestScore();
    setScore(0);
    initializeGame();
  };

  const handleBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    bestScore
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </>
  )
}

export default App
