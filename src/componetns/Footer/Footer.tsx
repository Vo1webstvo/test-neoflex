import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import world from '../../assets/img/world.svg';
import vk from '../../assets/img/VK.svg';
import telegram from '../../assets/img/Telegram.svg';
import whatsapp from '../../assets/img/Whatsapp.svg';

import './footer.scss';

const Footer = () => {
  const [active, setActive] = useState<string>('Rus');

  const toggleColorLeng = (lang: string) => {
    setActive(lang);
  };
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__wrapper__logo">
            <Link to={ROUTES.MAIN}>QPICK</Link>
          </div>
          <div className="footer__wrapper__links">
            <ul>
              <li>
                <Link to={ROUTES.FAVOURITES}>Избранное</Link>
              </li>
              <li>
                <Link to={ROUTES.BASKET}>Корзина</Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACTS}>Контакты</Link>
              </li>
            </ul>
          </div>

          <div className="footer__wrapper__info">
            <h3 className="footer__wrapper__info__title">Условия сервиса</h3>
            <div className="footer__wrapper__info__leng">
              <img className="footer__wrapper__info__leng__world" src={world} alt="leng" />
              <span
                className={active === 'Rus' ? 'footer__leng active' : 'footer__leng'}
                onClick={() => toggleColorLeng('Rus')}>
                Рус
              </span>
              <span
                className={active === 'Eng' ? 'footer__leng active' : 'footer__leng'}
                onClick={() => toggleColorLeng('Eng')}>
                Eng
              </span>
            </div>
          </div>

          <div className="footer__wrapper__social">
            <Link to="https://vk.com/">
              <img src={vk} alt="vk" />
            </Link>
            <Link to="https://t.me/vo1webstvo">
              <img src={telegram} alt="telegram" />
            </Link>
            <Link to="https://web.whatsapp.com/">
              <img src={whatsapp} alt="whatsapp" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
