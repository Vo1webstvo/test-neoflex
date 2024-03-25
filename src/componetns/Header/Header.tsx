import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import heart from '../../assets/img/heart.svg';
import basket from '../../assets/img/basket.svg';
import { useAppSelector } from '../../redux/hook';
import './header.scss';

const Header = () => {
  const { product } = useAppSelector((state) => state.product);
  const totalCount = product.reduce((acc, prev) => acc + prev.count, 0);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__wrapper__left">
            <Link to={ROUTES.MAIN}>QPICK</Link>
          </div>
          <div className="header__wrapper__right">
            <div className="header__wrapper__right__heart">
              <span className="header__count">0</span>
              <img src={heart} alt="heart" />
            </div>
            <div className="header__wrapper__right__basket">
              <Link to={ROUTES.BASKET}>
                <span className="header__count">{totalCount}</span>
                <img src={basket} alt="basket" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
