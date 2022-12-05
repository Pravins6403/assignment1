import './feature.css';
import phone from '../src/assets/phone1.png'
import lady from '../src/assets/imglady.png'
import heart from '../src/assets/heart.svg'
import arrow from '../src/assets/right.svg'
import eliplady from '../src/assets/eliplady.png'
import manimg from '../src/assets/manimg.png'
import manimg2 from '../src/assets/manimg2.png'
import manimg3 from '../src/assets/manimg3.png'
import manimg4 from '../src/assets/manimg4.png'
import people from '../src/assets/people.svg'
import arrow2 from '../src/assets/right.svg'
import arrow3 from '../src/assets/right.svg'
import graph from '../src/assets/graph.png'

 const Feature = () => {
  return (
    
   < div className='feature'>Solutions for every need
    <div className='solutiontext'>Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce.</div>
    <div className='feature1'>INFLUENCER</div>
    <div className='influencer'>Influencer marketing</div>
    <div className='influtext'>Create infinite pieces of content with our influencer product. Build,streamline,manage large-scale influencer programs</div>
    <div className='influimg'> <div>
         <img src={phone} alt="React Logo" />
      </div>
      </div>
      <div className='ladyimg'> <div>
         <img src={lady} alt="React Logo" />
      </div>
      </div>
      <div className='heart'> <div>
         <img src={heart} alt="React Logo" />
      </div>
      </div>
      <div className='feafturtext'>23.8K Likes</div>
      <div className='line'></div>
      <div className='line2'></div>
      <div className='line3'></div>
      <div className='influtext1'>Learn more</div>
      
      {/* <div className='arrow'>
         <img src={arrow} alt="React Logo" />
      
      </div> */}
      <div className='elipsimg'> 
         <img src={eliplady} alt="React Logo" />
      </div>
      
     
      <div className='manelip'>
         <img src={manimg} alt="React Logo" />
      </div>
      <div className='manelip2'>
         <img src={manimg2} alt="React Logo" />
      </div>
      <div className='manimg3'>
         <img src={manimg3} alt="React Logo" />
      </div>
      <div className='manimg4'>
         <img src={manimg4} alt="React Logo" />
      </div> 
      <div className='people'>
         <img src={people} alt="React Logo" />
      </div>
      <div className='community'>COMMUNITY</div>
      <div className='influtext2'>Bring your relationships to new heights with our community product. Discover your biggest enthusiasts </div>
      <div className='arrow2'>
         <img src={arrow2} alt="React Logo" />
      
      </div>
      <div className='learnmore2'>Learn more</div>
      <div className='Commuting'>Community marketing</div>
      {/* <div className='service'>Services</div> */}
      <div className='servicetext'>Managed services</div>
      <div className='servicetext2'>Our full-service solution lets our experts do the heavy lifting to optimize your community for brand building and storytelling</div>
      <div className='graph'>
         <img src={graph} alt="React Logo" />
      </div>
      <div className='learnmore3'><span color='blue'>$13.832</span></div>
      <div className='learn'>Learn More</div>
      <div className='arrow3'>
         <img src={arrow3} alt="React Logo" />
      
      </div>


    </div>
    
  )
}
export default Feature;
