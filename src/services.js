import './service.css';
import man4 from '../src/assets/man4.png'
import arrow from '../src/assets/right.svg'
import man5 from '../src/assets/man5.png'
import man6 from '../src/assets/man6.png'

 const Services = () => {
  return (
    <div className='container-fluid'> 
    <div className='service'>Solutions for every need</div>
    <div className='text'>Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce.</div>
    <div className='man4'> 
         <img src={man4} alt="React Logo" />
       
      </div>
      <div className='rebel'>
      <div className='name'>Rebel clothing</div>
         <div className='m'>6.7M</div>
         <div className='follower'>FOLLOWER REACH</div>
         <div className='learnmore'>Learn More <div className='arrow'><img src={arrow} alt="React Logo" />
         </div>
         <div className='man5'> 
         <img src={man5} alt="React Logo" />
       
      </div>
      

      </div>
      </div>
      <div className='card'>
      <div className='name'>Rebel clothing</div>
         <div className='m'>6.7M</div>
         <div className='follower'>FOLLOWER REACH</div>
         <div className='learnmore'>Learn More <div className='arrow'><img src={arrow} alt="React Logo" />
         </div>
         
         <div className='man6'> 
         <img src={man6} alt="React Logo" />

      </div>

      </div>
      </div>

      
      
      <div className='card1'>
      <div className='name'>Rebel clothing</div>
         <div className='m'>6.7M</div>
         <div className='follower'>FOLLOWER REACH</div>
         <div className='learnmore'>Learn More <div className='arrow'><img src={arrow} alt="React Logo" />
         </div>
         </div>
        

      </div>
      
      
     

    </div>
  )
}
export default Services;
