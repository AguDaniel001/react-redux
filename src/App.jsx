import React from 'react';
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {

  return (
    <>
      <CakeContainer/>
      <IceCreamContainer/>
      <HooksCakeContainer/>
      <NewCakeContainer/>
      <ItemContainer cake/>
      <ItemContainer/>
      <UserContainer/>
    </>
  )
}

export default App
