import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import tw from 'twin.macro';
const TopSection = lazy(() => import( './containers/TopSection/TopSection'));
const Explore = lazy(() => import ('./containers/ExploreSection/Explore'));
const Footer = lazy(() => import( './components/Footer/Footer'));


const AppContainer = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden
`;


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppContainer>
        <TopSection/>
        <Explore/>
        <Footer/>
      </AppContainer>
    </Suspense>

  );
}

export default App;
