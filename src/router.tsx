import { createHashRouter, Navigate } from 'react-router-dom';
import { ProjectsPage } from './pages/ProjectsPage';
import { CareersPage } from './pages/CareersPage';
import { AboutPage } from './pages/AboutPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <ProjectsPage />,
  },
  {
    path: '/careers',
    element: <CareersPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);
