import React, { Component } from 'react';
import './styles/App.css';
import './styles/dl-icon.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Header from './components/Header';
import Aside from './components/Aside';
import PageContainer from './components/PageContainer';
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="page">
          <Header />
          <Aside />
          <PageContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
