import React from 'react';
import './App.css';
import { Layout } from 'antd';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>

      <Layout>
        {/* Header */}
        <Navbar />

        <Switch>
          {/* Content */}
          <React.Fragment>
            <Content>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/search" component={SearchPage}></Route>
            </Content>
          </React.Fragment>
        </Switch>

        {/* Footer */}
        <Footer />
      </Layout>

    </BrowserRouter>
  );
}

export default App;
