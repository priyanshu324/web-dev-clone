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
import Testing from './components/learn/Testing.jsx';
import Forms from './components/learn/Forms.jsx';
import Design from './components/learn/Design.jsx';
import Deployment from './components/learn/Deployment.jsx';
import Images from './components/learn/Images.jsx';
import Privacy from './components/learn/Privacy.jsx';
import Performance_1 from './components/learn/Performance.jsx';
import Accessibility_1 from './components/learn/Accessibility.jsx';
import Raw_html from './components/learn/Raw_html.jsx';
import PWA from './components/learn/Pwa.jsx';
import Article_1 from './components/learn_article/html/Article_1.jsx';
import SinglePost from './components/learn_article/html/SinglePosts.jsx';


// Defining the application's routing configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // The main layout component
    children: [
      // Nested routes for different pages within the app
      {
        id: 1,
        path: '/',
        element: <Home />, // Home page
      },
      {
        id: 2,
        path: '/about',
        element: <About />, // About page
      },
      {
        id: 3,
        path: '/blogs',
        element: <Blog />, // Blog page
      },
      {
        id: 4,
        path: '/learn',
        element: <Learn />, // Learn page
      },
      {
        id: 5,
        path: '/explore',
        element: <Explore />, // Explore page
      },
      {
        id: 6,
        path: '/patterns',
        element: <Patterns />, // Patterns page
      },
      {
        id: 7,
        path: '/case',
        element: <Case />, // Case page
      },
      {
        id: 8,
        path: '/courses/html',
        element: <FirstCourses />, // HTML course page
      },
      {
        id: 9,
        path: '/courses/css',
        element: <SecondCourses />, // CSS course page
      },
      {
        id: 10,
        path: '/courses/javascript',
        element: <ThirdCourses />, // JavaScript course page
      },
      {
        id: 11,
        path: '/Signup',
        element: <Sign />, // Signup page
      },
      {
        id: 12,
        path: '/courses',
        element: <Courses />, // Courses page
      },
      {
        id: 13,
        path: '/ai',
        element: <Ai1 />, // Ai1 page
      },
      {
        id: 14,
        path: '/security',
        element: <Security_1 />,  // securtiy page
      },
      {
        id: 15,
        path: '/inp',
        element: <Inp />,  // inp page
      },
      {
        id: 16,
        path: '/performance',
        element: <Performance />,  //performance page
      },
      {
        id: 17,
        path: '/progressive-web-apps',
        element: <Progressive />,  //Progressive page
      },

      {
        id: 18,
        path: '/accessibility',
        element: <Accessibility />,  //Accessibility page
      },

      {
        id: 19,
        path: '/identity',
        element: <Identity />,  //Identity page
      },
      {
        id: 20,
        path: '/basline',
        element: <Basline />,  //basline page
      },
      {
        id: 21,
        path: '/shows',
        element: <Shows />,  //shows page
      },
      {
        id: 22,
        path: '/develpoer-newsletter',
        element: <Newsletter />,  //newsletter page
      },
      {
        id: 23,
        path: '/learn/html-1',
        element: <Raw_html />,  //learn html  page
      },
      {
        id: 24,
        path: '/learn/css',
        element: <Css />,  //learn css page
      },
      {
        id: 25,
        path: '/learn/javascript',
        element: <Javascript />,  //learn javascript page
      },
      {
        id: 26,
        path: '/learn/performance',
        element: <Performance_1 />,  //learn performance page
      },
      {
        id: 27,
        path: '/learn/accessibility',
        element: <Accessibility_1 />,  //learn accessibility page
      },
      {
        id: 28,
        path: '/learn/privacy',
        element: <Privacy />,  //learn privacy page
      },
      {
        id: 29,
        path: '/learn/images',
        element: <Images />,  //learn Images page
      },
      {
        id: 30,
        path: '/learn/forms',
        element: <Forms />,  //learn Forms page
      },

      {
        id: 31,
        path: '/learn/pwa',
        element: <PWA />,  //learn pwa page
      },

      {
        id: 32,
        path: '/learn/design',
        element: <Design />,  //learn Design page
      },

      {
        id: 33,
        path: '/learn/testing',
        element: <Testing />,  //learn Testing page
      },

      {
        id: 34,
        path: '/learn/deployment',
        element: <Deployment />,  //learn Deployment page
      },
      {
        id: 35,
        path: '/learn/more-courses',
        element: <Learn />,  //learn page
      },
      {
        id: 36,
        path: "/blog/article-1",
        element: <Article_1 />
      },
      {
        id: 37,
        path: "/post/:id",
        element: <SinglePost />
      }


    ],
  },
]);

// Render the application to the DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);