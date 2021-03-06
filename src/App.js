import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import styled from 'styled-components'
import Chat from './components/Chat'

function App() {
  return (
    <div className="app">
      <Router>
        <>
        <Header />
        <AppBody>
          <Sidebar />
            <Switch>
              <Route exact path='/'>
                <Chat />
              </Route>
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;