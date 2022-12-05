import './header-module.css';
import surprise from '../src/assets/surprise.svg'

 const Header =()=>{
  return (
    <div className='container-fluid'>
        
    <h1 className='header1'></h1>
    
    <div className='mediatype'></div>
    <div className='medianame'>Media Type</div>
    <div className='insta'></div>
    <div className='amandadata'></div>
    <div className='mediagraph'></div>
    <div className='mediagraph1'></div>
    <div className='mediatext'></div>
    <div className='mediatextcolor'>72.3% of the media for #sunrise are photos</div>
    <div className='amandadatabox'></div>
    <div className='amandadataname'>Amanda M.Data</div>
    <div className='amandadatagrowth'>Your Growth</div>
    <div className='amandadatapic'></div>
    <div className='amandadatano'>3000</div>
    <div className='tellbetter'> 
    <div className='text1'>
    <span style={{color: 'black'}}>Tell a better brand story</span> </div>
    </div>
    <div className='tellbetterword'>Automate the way you search through hashtag and suggested profile to find result 100x faster</div>
    <div className='graph1'></div>
    <div className='graphcandle1'></div>
    <div className='graphcandle2'></div>
    <div className='graphcandle3'></div>
    <div className='graphcandle4'></div>
    <div className='graphcandle5'></div>
    <div className='graphcandle6'></div>
    <div className='graphcandle7'></div>
    <div className='graphcandle8'></div>
    <div className='graphcandle9'></div>
    <div className='graphtext'>16.2K New Followers</div>
    <div className='followergrowth'>Follower Growth</div>
    <div className='instagrowth'></div>
    <div className='eightk'>8K</div>
    <div className='sixk'>6K</div>
     <div className='fourk'>4K</div> 
     <div className='twok'>2K</div>
    
    
     <div className='line4'></div>
     {/* <div className='box'></div> */}
     <div className='boxcolor'></div>
     <div className='followergrowth1'></div>
     <div className='rectangle'>14K</div>
     <div className='linek'></div>
     <div className='Ekahal'>Ekahal</div>
     <div className='trustedclient'>SOME OF OUR TRUSTED CLIENT</div>

      
       <div className='followergrowthtext'>Follower Growth
       <div className='emojicolor'> 
         <img src={surprise} alt="React Logo"/>
      </div> 
       </div>
       
     <button className='requestbutton'><span style={{color: 'white'}}>Request demo</span> </button>
     <button className='requesdemo'><span style={{color: 'white'}}>Request demo</span> </button>
     <div className='logo'></div>
    </div>
  )
}
export default Header;
