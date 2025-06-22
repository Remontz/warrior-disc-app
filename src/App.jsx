import React from 'react';
import MenuBar from './components/MenuBar';
import GameSection from './components/GameSection';
import HotLinks from './components/HotLinks';
import SiteLinks from './components/SiteLinks';
import Footer from './components/Footer';



export default function App() {
  return (
  <div className='app-container'>
    <MenuBar />
    <GameSection />
    <HotLinks/>
    <SiteLinks/>
    <Footer/>
  </div>);
}