import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import MainLayout from './components/layouts/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />)
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  );
}

export default App;
