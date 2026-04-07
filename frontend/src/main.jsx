import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import { Provider} from 'react-redux'
import store from "./store/store.js"
import ProtectedRoute from './utils/protectedRoute'
import Dashboard from './pages/Dashboard.jsx'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout with Outlet
    children: [
      { 
        index: true,
        element: <LoginPage />, // ✅ separate route
      },

      // 🔐 Protected routes
      {
        path: "dashboard",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={ store }>
    <RouterProvider router={router} />
  </Provider>
  </StrictMode>,
)
