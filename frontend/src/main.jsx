import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // 👈 Main Layout here
    // errorElement: <NotFound />,
    children: [
      {
        index: true,       // 👈 default route "/"
        element: <LoginPage />,
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },
      // {
      //   path: "contact",
      //   element: <Contact />,
      // },
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
