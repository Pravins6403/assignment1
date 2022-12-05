import React from 'react'
import Countdown from './component/countdown/Countdown';
import Header from './Header';
import Feature from './feature';
import Newsletter from './newsletter';
import Footer from './footer';
import Services from './services';
import Testimonial from './testimonial';
import { Navbar } from './component/Navbar/Navbar';
export const App = () => {
  return (
    <div>
      <Header/>
      {/* <Navbar/> */}
      <Feature/>
      <Services />
      <Newsletter />
<Testimonial/>
<Footer/>
      
      <Countdown/>
          </div>
  )
}
export default App;
