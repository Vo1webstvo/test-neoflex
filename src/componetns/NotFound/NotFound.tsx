import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

import './notfound.scss';

const NotFound = () => {
  return (
    <div className="container">
      <div className="notFound">
        <h2 className="notFound__title">Данная страница не существует !</h2>
        <h2 className="notFound__link">
          Вернуться на <Link to={ROUTES.MAIN}>Главную</Link>{' '}
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
