import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
import { IData } from '../../interface/data';
import Card from '../Card/Card';
import './carddescription.scss';

const CardDescription = () => {
  const { data } = useAppSelector((state) => state.heaadphones);
  const { id } = useParams();

  const allData: IData[] = data.headphones.concat(data.wirelles);

  const elem: IData | undefined = allData.find((item: IData) => item.id == +id!);

  if (!elem) {
    return (
      <div className="container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="cardDescr">
        <Card items={elem} />
      </div>
    </div>
  );
};

export default CardDescription;
