import Card from './Card'

function Main({cards, openPopup, displayCards}) {
  return(
    <main className="main">
      <section className="paintings">
        <h1 className="title">Картины эпохи Возрождения</h1>
        <div className="cards">
          {  cards.map( (card, i) => (
               <Card key={i} card={card} openPopup={openPopup} displayCard={displayCards[i]} />
             ))
          }
        </div>
      </section>
    </main>
  );
}

export default Main;