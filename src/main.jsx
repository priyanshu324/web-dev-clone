import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import First_Courses from './pages/courses/First_Courses.jsx';
import Second_Courses from './pages/courses/Second_Courses.jsx';
import Third_Courses from './pages/courses/Third_courses.jsx';
import Blog from './pages/Blog.jsx';
import Learn from './pages/Learn.jsx';
import Explore from './pages/Explore.jsx';
import Patterns from './pages/Patterns.jsx';
import Case from './pages/Case.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/learn",
        element: <Learn />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/patterns",
        element: <Patterns />,
      },
      {
        path: "/case",
        element: <Case />,
      },
      {
        path: "/courses/html",
        element: <First_Courses />,
      },
      {
        path: "/courses/css",
        element: <Second_Courses />,
      },
      {
        path: "/courses/javascript",
        element: <Third_Courses />,
      },
    ]

  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

