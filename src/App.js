import './App.css';
import React, { Suspense, lazy } from 'react';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Allrestaurants from './Components/Allrestaurants/Allrestaurants';
import { Route, Routes } from 'react-router-dom';
const ViewRestaurant = lazy(() => import('./Components/ViewRestaurant'));






function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Header/>
      </header>
      <section>
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <Routes>
            <Route path='/' element={<Allrestaurants/>}/>
            <Route path='/view/:id' element={<ViewRestaurant/>}/>
          </Routes>
        </Suspense>
        {/* <Allrestaurants/> */}
      </section>
      <footer>
        <Footer/>
      </footer>
  
    </div>
  );
}

export default App;



