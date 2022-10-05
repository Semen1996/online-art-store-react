import phoneIcon from "../image/Icons/phone.svg";
import adressIcon from "../image/Icons/adress.svg";

function Footer() {
  return(
    <footer className="footer">
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__list-item"><p className="menu__text">Каталог</p></li>
          <li className="menu__list-item"><p className="menu__text">Доставка</p></li>
          <li className="menu__list-item"><p className="menu__text">Оплата</p></li>
          <li className="menu__list-item"><p className="menu__text">Контакты</p></li>
          <li className="menu__list-item"><p className="menu__text">О компании</p></li>
        </ul>
      </nav>
      <div className="contacts">
        <div className="contacts__item">
          <img className="contacts__icon" src={phoneIcon} alt="" />
          <p className="contacts__text"> +7 (812) 555-55-55</p>
        </div>
        <div className="contacts__item">
          <img className="contacts__icon" src={adressIcon} alt="" />
          <p className="contacts__text"> г. Санкт-Петербург, ул. Ефимова, 3</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;