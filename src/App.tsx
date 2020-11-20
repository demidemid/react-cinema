import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import movieList from './data/movieList';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main movieList={movieList} />
      <Footer movieCounter={movieList.length} />
    </div>
  );
}

export default App;
