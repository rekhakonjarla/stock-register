import './cards.css'
import ac from './ac.png'
import ac1 from './ac1.jpg'
import fan from './fan.jpg'
import fan1 from './fan1.jpeg'
import light from './light.webp'
import tubelight from './tubelight.jpg'
function Cards (){
    return(
        <div className="container-fluid" style={{backgroundColor:"lightcyan",marginTop:"5rem",borderRadius:"10px"}}>
            
                
            <div id='SERVICES'>
                <h5 style={{fontSize:"26px"}} ><b>Our Services</b> </h5>
            </div>
            <div className='row'>
                <div className='col-md-2'>
                    <img src={fan} style={{height:'100px',border:"0px"}} alt=''/>
                    <p style={{marginLeft:"15px"}}>Table <br/>fan</p>
                </div>
                <div className='col-md-2'>
                    <img src={fan1} style={{height:'100px',border:"0px"}} alt=''/>
                    <p style={{marginRight:""}}>Ceiling fan</p>
                </div>
                <div className='col-md-2'>
                    <img src={ac} style={{height:'100px',border:"0px"}} alt=''/>
                    <p style={{marginRight:""}}>Window <br/>Air Conditioner </p>
                </div>
                <div className='col-md-2'>
                <img src={ac1} style={{height:'100px',border:"0px"}} alt=''/>
                <p style={{marginRight:""}}>Portable<br/>Air Conditioner.</p>
                </div>
                <div className='col-md-2'>
                <img src={light} style={{height:'100px',border:"0px"}} alt=''/>
                <p style={{marginRight:""}}>Electric<br/>bulb</p>
                </div>
                <div className='col-md-2'>
                <img src={tubelight} style={{height:'100px',border:"0px"}} alt=''/>
                <p style={{marginRight:""}}>Tube<br/> light</p>
                </div>

            </div>   
        
        </div>     


    )
}
export default Cards