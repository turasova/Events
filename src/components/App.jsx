import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/loader';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const EventsPage = lazy(() => import('./Pages/EventsPage/EventsPage'));
const ParticipantsPage = lazy(() =>
  import('./Pages/ParticipantsPage/ParticipantsPage')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/participants" element={<ParticipantsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
