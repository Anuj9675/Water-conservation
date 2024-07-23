import React from 'react';
import Home from './components/Home';
import Login from './Auth/LoginForm';
import Dashboard from "./components/dashboard/Dashboard";
import Projects from './components/dashboard/pages/Projects';
import Community from './components/dashboard/pages/Community';
import Report from './components/dashboard/pages/Report';
import Notifications from './components/dashboard/pages/Notifications';
import Resources from './components/dashboard/pages/Resources';
import Volunteer from './components/dashboard/pages/Volunteer';
import Funding from './components/dashboard/pages/Funding';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Content from './components/dashboard/pages/Content';
import AboutUs from './components/aboutus';
import OurMission from './components/Ourmission';
import Signup from './Auth/SignupForm';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/about-us",
    element: <AboutUs/>
  },
  {
    path: "/our-mission",
    element: <OurMission/>
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        index: true,
        element: <Content />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "community",
        element: <Community />
      },
      {
        path: "report",
        element: <Report />
      },
      {
        path: "notifications",
        element: <Notifications />
      },
      {
        path: "resources",
        element: <Resources />
      },
      {
        path: "volunteer",
        element: <Volunteer />
      },
      {
        path: "funding",
        element: <Funding />
      },
    ]
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
