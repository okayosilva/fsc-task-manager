import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import App from './App.jsx';
import { TaskDetails } from './pages/task-details.jsx';

let router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'task/:taskId',
    element: <TaskDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
      toastOptions={{
        style: {
          color: '#35383E',
        },
      }}
    />
    <RouterProvider router={router} />
  </StrictMode>
);
