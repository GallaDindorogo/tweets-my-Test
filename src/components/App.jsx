import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Layout = lazy(() => import('./modules/Layout/Layout'));
const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('./Pages/TweetsPage/TweetsPage'));

const Loader = lazy(() => import('../shared/Loader/Loader'));

export const App = () => {
  return (
    <Suspense>
      <Routes fallback={<Loader />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tweets" element={<TweetsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
