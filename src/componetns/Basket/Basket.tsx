import { useAppSelector, useAppDispatch } from '../../redux/hook';
import delItem from '../../assets/img/deleteItem.svg';
import minus from '../../assets/img/minus.svg';
import plus from '../../assets/img/plus.svg';
import Button from '../../shared/button/Button';
import { decrCount, incrCount, delToBasket } from '../../redux/slice/basketSlice';
import './basket.scss';

const Basket = () => {
  const { product } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const finalPrice = product.reduce((sum, product) => product.count * +product.price + sum, 0);

  const items = product.map((item) => {
    const itemCount = item.count;
    const totalPrice = item.count * +item.price;

    return (
      <div className="basket__wrapper" key={item.id}>
        <div className="basket__wrapper__product">
          <div className="basket__wrapper__product__item">
            <div className="headphones">
              <img src={item.path} alt="headphones" />
            </div>
            <div className="counter">
              <span className="counter__znak" onClick={() => dispatch(decrCount(item.id))}>
                <img src={minus} alt="dec" />
              </span>
              <span className="counter__count">{itemCount}</span>
              <span className="counter__znak" onClick={() => dispatch(incrCount(item.id))}>
                <img src={plus} alt="inc" />
              </span>
            </div>
          </div>
          <div className="basket__wrapper__product__info">
            <div className="name">{item.title}</div>
            <div className="price">{item.price} ₽</div>
          </div>
        </div>
        <div className="basket__wrapper__buy">
          <div className="delItem" onClick={() => dispatch(delToBasket(item.id))}>
            <img src={delItem} alt="del" />
          </div>
          <div className="totalPrice">{totalPrice} ₽</div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="basket">
        <div className="basket__title">Корзина</div>
        <div className="basket__container">
          <div>{items}</div>
          <div className="basket__order">
            <div className="basket__order__priceInfo">
              <div className="basket__order__all">ИТОГО</div>
              <div className="basket__order__allPrice">₽ {finalPrice} </div>
            </div>
            <Button className="basket__order__btn">Перейти к оформлению</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
