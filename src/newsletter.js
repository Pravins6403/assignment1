import './newsletter-module.css';
import arrow from '../src/assets/right.svg'
 const Newsletter = () => {
  return (
    <div className='container-fluid'>
      <div className='bg'>
        <div className='subscribe'>Subscribe our newsletter</div>
        <div className='subscribetext'>Join thousands of marketers and entrepreneurs for a 2-day event at the forefront of social commerce.</div>
<button className='subscribebutton'> <span style={{color: 'white'}}>subscribe</span>
{/* <div className='arrow'>
  <img src={arrow} alt="React Logo"></img></div> */}
  </button>


      </div>
    </div>
  )
}
export default Newsletter;
