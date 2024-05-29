import React from 'react';
import './App.css';

import Header from './component/header/Header';
import Home from './component/home/Home';
import About from './component/about/About';
import Features from './component/features/Features';
import Menu from './component/menu/Menu';
import Gallery from './component/gallery/Gallery';
import Reservation from './component/reservation/Reservation';
import Contact from './component/contact/ContactForm';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Features/>
      <Menu/>
      <Gallery/>
      <Reservation/>
      <Contact/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
// import React, { useState } from 'react';
// import './App.css';

// import Header from './component/header/Header';
// import Home from './component/home/Home';
// import About from './component/about/About';
// import Features from './component/features/Features';
// import Menu from './component/menu/Menu';
// import Gallery from './component/gallery/Gallery';
// import Reservation from './component/reservation/Reservation';
// import ContactForm from './component/ContactForm';

// function App() {
//   const [route, setRoute] = useState('home');

//   return (
//     <div>
//       <Header setRoute={setRoute} />
//       {route === 'home' && <Home />}
//       {route === 'about' && <About />}
//       {route === 'features' && <Features />}
//       {route === 'menu' && <Menu />}
//       {route === 'gallery' && <Gallery />}
//       {route === 'reservation' && <Reservation />}
//       {route === 'contact' && <ContactForm />}
//     </div>
//   );
// }

// export default App;
// import React,{useState} from 'react';
// import Header from './component/header/Header';
// import Home from './component/home/Home';
// import About from './component/about/About';
// import Features from './component/features/Features';
// import Menu from './component/menu/Menu';
// import Gallery from './component/gallery/Gallery';
// import Reservation from './component/reservation/Reservation';
// import ContactForm from './component/ContactForm';

// function App() {
//   const [route, setRoute] = useState('home');

//   const renderComponent = () => {
//     switch (route) {
//       case 'home':
//         return <Home />;
//       case 'about':
//         return <About />;
//       case 'features':
//         return <Features />;
//       case 'menu':
//         return <Menu />;
//       case 'gallery':
//         return <Gallery />;
//       case 'reservation':
//         return <Reservation />;
//       case 'contact':
//         return <ContactForm />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div>
//       <Header setRoute={setRoute} />
//       {renderComponent()}
//     </div>
//   );
// }

// export default App;

