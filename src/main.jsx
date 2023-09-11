import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'

const router = createBrowserRouter({
    path: '/',
    element: <App />
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );