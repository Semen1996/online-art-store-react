import { useState } from 'react';

function Header({cards, changeDisplayCards}) {

  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const displayCards = cards.map(item => {
      if( item.name.indexOf(search) === -1 ) {
        return'none';
      } else {
        return 'block';
      }
    });
    changeDisplayCards(displayCards);
  }

  function handleChange(e) {
    setSearch(e.target.value);

    if(e.target.value === '') {
      const displayCards = cards.map(item => 'block');
      changeDisplayCards(displayCards);
    }
  }

  return(
    <header className="header">
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list-item"><p className="menu__text">Каталог</p></li>
          <li className="menu__list-item"><p className="menu__text">Доставка</p></li>
          <li className="menu__list-item"><p className="menu__text">Оплата</p></li>
          <li className="menu__list-item"><p className="menu__text">Контакты</p></li>
          <li className="menu__list-item"><p className="menu__text">О компании</p></li>
        </ul>
      </nav>
      <form className="search" name="search" onSubmit={handleSubmit} >
        <input className="search__input" name="input" type="text" placeholder="Поиск по названию картины" onChange={handleChange} />
        <button className="search__submit" name="submitBtn" type="submit" >Найти</button>
      </form>
    </header>
  );
}

export default Header;