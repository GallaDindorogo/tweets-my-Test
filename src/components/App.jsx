import { Routes, Route } from 'react-router-dom';

import Layout from './modules/Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import TweetsPage from './Pages/TweetsPage/TweetsPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
