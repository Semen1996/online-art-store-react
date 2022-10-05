import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Popup({isOpen, closePopup, card, cards}) {
  return(
    <div className={`popup ${ isOpen ? 'popup_opened': ''}`} >
      <div className="popup__container">
        <h2 className="popup__title">{card.name}</h2>
        <img className="popup__img" src={card.link} alt='Картина'/>
        <p className="popup__text">{card.description}</p>
        <Swiper className='images-slider' spaceBetween={25} slidesPerView={1.5}>
          {cards.map((item, i) => (
            <SwiperSlide key={i}> 
              <img className="images-slider__image" src={cards[i].link} alt='Картина'/> 
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="popup__price">
          <p className="popup__old-price">{card.oldPrice}</p>
          <p className="popup__current-price">{card.currentPrice}</p>
        </div>
        <button className="popup__close" type="button" aria-label="Закрыть попап" onClick={closePopup}></button>
      </div>
    </div>
  );
}

export default Popup;