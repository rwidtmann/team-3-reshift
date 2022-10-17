import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import StartShift from './pages/startShift';
import EndShift from './pages/endShift';
import Admin from './pages/adminPage';
import Home from './pages/homeLogin';
import AdminLogin from './pages/adminLogin';
import CreateEmployee from './pages/createEmployee';
import DeleteEmployee from './pages/deleteEmployee';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header';
import './styles/app.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // see notes
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="mainSet">
          <Header />
          <div className="container">
            <Routes className="routePages">
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/adminPage" 
                element={<Admin />} 
              />
              <Route 
                path="/adminLogin" 
                element={<AdminLogin />} 
              />
              <Route
                path="/createEmployee" 
                element={<CreateEmployee />} 
              />
              <Route
                path="/deleteEmployee" 
                element={<DeleteEmployee />} 
              />
              <Route 
                path="/startShift" 
                element={<StartShift />} 
              />
              <Route 
                path="/endShift" 
                element={<EndShift />} 
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;