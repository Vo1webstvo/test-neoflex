import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import Main from '../../pages/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BasketPage from '../../pages/BasketPage';
import NotFound from '../NotFound/NotFound';
import CardDescription from '../CardDescription/CardDescription';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.BASKET} element={<BasketPage />} />
        <Route path={`${ROUTES.CARDID}/:id`} element={<CardDescription />} />
        <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
