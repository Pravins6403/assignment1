import './testimonial.css';
import fa from '../src/assets/fa.png'
import man7 from '../src/assets/man7.png'
const Testimonial = () => {
  return (
    <div className="container-fluid">
<div className="happy"> Happy Clients</div>
<div className="happy1"> The Marketing Accountability Standards Board (MASB) endorses the definitions, purposes, and constructs of classes</div>
<div className='fa'> 
         <img src={fa} alt="React Logo" />
       
      </div>
      <div className="fatext"> Not weekly or monthly like other sites out there. This ensures that we offer prospective homebuyers and investors with the freshest- hottest deals on the Internet.</div>
      <div className='man7'> 
         <img src={man7} alt="React Logo" />
       
      </div>
      <div className="name2"> Rowhan Smith</div>
      <div className="nametext"> CEO, Foreclosure</div>


    </div>
  )
}
export default Testimonial;
