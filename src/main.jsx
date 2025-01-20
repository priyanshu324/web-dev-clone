import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing global styles
import './index.css';

// Importing the main App component
import App from './App.jsx';

// Importing page components
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import Learn from './pages/Learn.jsx';
import Explore from './pages/Explore.jsx';
import Patterns from './pages/Patterns.jsx';
import Case from './pages/Case.jsx';
import Sign from './pages/Sign.jsx';
import Courses from './pages/Courses.jsx';

// Importing course-specific components
import FirstCourses from './pages/courses/First_Courses.jsx';
import SecondCourses from './pages/courses/Second_Courses.jsx';
import ThirdCourses from './pages/courses/Third_courses.jsx';

// Importing AI-related components
import Ai1 from './components/ai/Ai_1.jsx';
import Inp from './components/ai/Inp.jsx';
import Security_1 from './components/ai/security_1.jsx';
// seprate files
import Performance from './components/Performance.jsx';
import Progressive from './components/progressive.jsx';
import Accessibility from './components/Accessibility.jsx';
import Identity from './components/Identity.jsx';
import Basline from './components/Basline.jsx';
import Shows from './components/Shows.jsx';
import Newsletter from './components/Newsletter.jsx';
import Css from './components/learn/Css.jsx';
import Javascript from './components/learn/Javascript.jsx';
import Pwa from './components/learn/Pwa.jsx';
import Testing from './components/learn/Testing.jsx';
import Forms from './components/learn/Forms.jsx';
import Design from './components/learn/Design.jsx';
import Deployment from './components/learn/Deployment.jsx';
import Images from './components/learn/Images.jsx';
import Privacy from './components/learn/Privacy.jsx';
import Performance_1 from './components/learn/Performance.jsx';
import Accessibility_1 from './components/learn/Accessibility.jsx';
import Raw_html from './components/learn/Raw_html.jsx';

// Defining the application's routing configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The main layout component
    children: [
      // Nested routes for different pages within the app
      {
        path: '/',
        element: <Home />, // Home page
      },
      {
        path: '/about',
        element: <About />, // About page
      },
      {
        path: '/blogs',
        element: <Blog />, // Blog page
      },
      {
        path: '/learn',
        element: <Learn />, // Learn page
      },
      {
        path: '/explore',
        element: <Explore />, // Explore page
      },
      {
        path: '/patterns',
        element: <Patterns />, // Patterns page
      },
      {
        path: '/case',
        element: <Case />, // Case page
      },
      {
        path: '/courses/html',
        element: <FirstCourses />, // HTML course page
      },
      {
        path: '/courses/css',
        element: <SecondCourses />, // CSS course page
      },
      {
        path: '/courses/javascript',
        element: <ThirdCourses />, // JavaScript course page
      },
      {
        path: '/Signup',
        element: <Sign />, // Signup page
      },
      {
        path: '/courses',
        element: <Courses />, // Courses page
      },
      {
        path: '/ai',
        element: <Ai1 />, // Ai1 page
      },
      {
        path: '/security',
        element: <Security_1 />,  // securtiy page
      },
      {
        path: '/inp',
        element: <Inp />,  // inp page
      },
      {
        path: '/performance',
        element: <Performance />,  //performance page
      },
      {
        path: '/progressive-web-apps',
        element: <Progressive />,  //Progressive page
      },

      {
        path: '/accessibility',
        element: <Accessibility />,  //Accessibility page
      },

      {
        path: '/identity',
        element: <Identity />,  //Identity page
      },
      {
        path: '/basline',
        element: <Basline />,  //basline page
      },
      {
        path: '/shows',
        element: <Shows />,  //shows page
      },
      {
        path: '/develpoer-newsletter',
        element: <Newsletter />,  //newsletter page
      },
      {
        path: '/learn/html',
        element: <Raw_html />,  //learn html  page
      },
      {
        path: '/learn/css',
        element: <Css />,  //learn css page
      },
      {
        path: '/learn/javascript',
        element: <Javascript />,  //learn javascript page
      },
      {
        path: '/learn/performance',
        element: <Performance_1 />,  //learn performance page
      },
      {
        path: '/learn/accessibility',
        element: <Accessibility_1 />,  //learn accessibility page
      },
      {
        path: '/learn/privacy',
        element: <Privacy />,  //learn privacy page
      },
      {
        path: '/learn/images',
        element: <Images />,  //learn Images page
      },
      {
        path: '/learn/forms',
        element: <Forms />,  //learn Forms page
      },

      {
        path: '/learn/pwa',
        element: <Pwa />,  //learn pwa page
      },

      {
        path: '/learn/design',
        element: <Design />,  //learn Design page
      },

      {
        path: '/learn/Testing',
        element: <Testing />,  //learn Testing page
      },

      {
        path: '/learn/deployment',
        element: <Deployment />,  //learn Deployment page
      },


    ],
  },
]);

// Render the application to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);