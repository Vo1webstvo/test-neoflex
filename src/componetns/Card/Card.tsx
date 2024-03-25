import star from '../../assets/img/star.svg';
import { IData } from '../../interface/data';
import Button from '../../shared/button/Button';
import { addToBasket } from '../../redux/slice/basketSlice';
import { useAppDispatch } from '../../redux/hook';
import './card.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

interface ICardData {
  items: IData;
}

const Card = ({ items }: ICardData) => {
  const { id, path, price, rate, title, discount } = items;
  const dispatch = useAppDispatch();

  const addToBasketHeadphones = () => {
    const itemHeadphones: IData = {
      id,
      path,
      price,
      rate,
      title,
      discount,
      count: 0,
    };
    dispatch(addToBasket(itemHeadphones));
  };

  return (
    <div className="card">
      <div className="card__img">
        <Link to={`${ROUTES.CARDID}/${id}`}>
          <img src={path} alt="phone" />
        </Link>
      </div>

      <div className="card__info">
        <div className="card__info__up">
          <div className="card__info__title">{title} </div>
          <div className="card__info__price">
            {price} p<div> {discount ? `${Math.round(discount * +price)} p` : ''} </div>
          </div>
        </div>
        <div className="card__info__down">
          <div className="card__info__widget">
            <img src={star} alt="rating" />
            <span>{rate}</span>
          </div>
          <div className="card__info__btn">
            <Button className="card__btn" onClick={addToBasketHeadphones}>
              Купить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
