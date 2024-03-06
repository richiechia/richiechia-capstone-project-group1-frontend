import React, { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './components/theme';
import { Placeholder, Team, Tech, Dashboard } from './components/pages'
import { Navbar } from './components/organisms';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

const routes = [
  {
    path : '/dashboard',
    element: <Dashboard/>
  },
  {
    path: '/tech',
    element: <Tech/>
  },
  {
    path: '/team',
    element: <Team/>
  },
  {
    path: '/what',
    element: <Placeholder/>
  },
  {
    path: '*',
    element: <Team/>
  }
]

function App() {
  // const [data, setData] = useState({}); // Assuming the expected data is an object

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/hello`)
  //     .then(res => res.json()
  //     )
  //     .then(data => {
  //       setData(data);
  //       console.log(data);
  //     })
  //     .catch(error => console.error("Fetch error:", error)); // Error handling
  // }, []); // Dependency array is empty, indicating this effect runs once on mount

  // return (
  //   <div>
  //     {typeof data.yeahboi === "undefined" ? (
  //       <p>Loading... Updated to using process.env</p> // Displaying a loading message instead of trying to render `data` directly
  //     ) : (
  //       data.yeahboi.map((yeahboi, i) => <p key={i}>{yeahboi}</p>)
  //     )}
  //   </div>
  // );
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
        <Router basename='/'>
          <Routes>
            {routes.map((route) => (
              <Route key={route} path={route.path} element={route.element}></Route>
              ))}
          </Routes>
        </Router>
    </ChakraProvider>
  )
}

export default App;
