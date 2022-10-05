import { useState } from 'react';

function Card({card, openPopup, displayCard}) {

  const [disableBtn, setDisableBtn] = useState(false);
  const [btnText, setBtnText] = useState(card.status);

  // Функция для запуска таймера на 2 сек
  function handleprocessing() {
    setTimeout(()=>{
      setDisableBtn(false);

      if(btnText === 'В корзине') {
        setBtnText('Купить');
      } else {
        setBtnText('В корзине');
      }
    }, 2e+3);
  }

  // При нажатие на кнопку купить или в корзине
  function handleButton() {
    setDisableBtn(true);
    setBtnText('Обработка...');
    handleprocessing();
  }

  // Функция для открытия попапа при нажатие на картинку или название
  function handleCard() {
    openPopup(card);
  }

  return(
    <div className={`card ${btnText === 'Продано' ? 'card_disactive' : ''} ${displayCard ==='none' ? 'card_type_none': 'card_type_card_type_block'}`}>
      <img className="card__img" src={card.link} alt={card.link} onClick={handleCard} />
      <h2 className="card__title" onClick={handleCard}>{card.name}</h2>
      <div className="card__sale">
        <div className="card__price">
          <p className="card__old-price">{card.oldPrice}</p>
          <p className="card__current-price">{card.currentPrice}</p>
        </div>
        <button className={`card__btn ${disableBtn ? 'card__btn_type_disable' : ''} ${btnText === 'В корзине' ? 'card__btn_type_cart' : ''} ${btnText === 'Продано' ? 'card__btn_type_disactive' : ''}`} onClick={handleButton} disabled={disableBtn} >{btnText}</button>
      </div>
    </div>
  );
}

export default Card;