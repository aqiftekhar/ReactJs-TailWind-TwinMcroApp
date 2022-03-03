import React from 'react';
import logo from './logo.svg';
import './App.css';
import tw from 'twin.macro';
import TopSection from './containers/TopSection/TopSection';
import Explore from './containers/ExploreSection/Explore';
import Footer from './components/Footer/Footer';

const AppContainer = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden
`;


function App() {
  return (
    <AppContainer>
        <TopSection/>
        <Explore/>
        <Footer/>
    </AppContainer>
  );
}

export default App;
