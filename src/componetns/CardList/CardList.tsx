import { headphones, werelles } from '../../data';
import Card from '../Card/Card';

import './cardList.scss';

const CardList = () => {
  const itemHeadphones = headphones.map((item) => {
    return <Card key={item.id} items={{ ...item }} />;
  });

  const itemWherelles = werelles.map((item) => {
    return <Card key={item.id} items={{ ...item }} />;
  });

  return (
    <div className="cardList">
      <div className="container">
        <div className="cardList__headphones">
          <h2 className="cardList__title">Наушники</h2>
          <div className="cardList__wrapper">{itemHeadphones}</div>
        </div>
        <div className="cardList__wherelles">
          <h2 className="cardList__title">Беспроводные Наушники</h2>
          <div className="cardList__wrapper">{itemWherelles}</div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
