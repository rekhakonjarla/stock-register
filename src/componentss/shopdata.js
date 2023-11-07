

import { useState,useEffect  } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './shopdata.css'




const Shoplist = () => {
  const [shopdata,setShopdata] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch data from the backend
    axios.get('http://localhost:4500/getshopdata') // Update the URL to match your backend
      .then((response) => {
        console.log(response.data.shopdata); // Optional: Log the response data
        setShopdata(response.data.shopdata);
      })
      .catch((error) => {
        console.error(error); 
        // Handle errors
      });
  }, [])
  ;
  const deletesho=(id)=>{
    
    axios.delete('http://localhost:4500/deleteshopdata/'+id)
    .then(res=>{console.log(res)
      alert("deleted successfully")

   
    window.location.reload()

    })
     
  }

  return (
    <div className="container">
        <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#6dabb3', borderRadius:"2rem",}}>
          <div>
            <img src="a.jpg" alt="" style={{ height: '50px', border: '0px' }} />
            <span style={{ marginLeft: '0.5rem', color: 'black',fontWeight:"bolder" }}>STOCK REGISTER</span>
          </div>
          <div id="adity">
            <Link to="/" style={{color:"black",textDecorationLine:"none",fontWeight:"bold",}}  >Home</Link>
           </div>
        </div>
        </div>
        

    <div style={{marginTop:"1.5rem"}}>
      
      <table  cellPadding={1} cellSpacing={1}style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
            <tr>
            <th>SL.NO</th>
            <th>Name</th>
            <th>DiscountPrice</th>
            </tr>
        </thead>
        <tbody>
            {shopdata &&shopdata.map((shopdata, index) => (
            <tr key={index}> {/* Each student data should be wrapped in a separate <tr> */}
                <td>{index + 1}</td>
                <td>{shopdata.name}</td>
               <td>{shopdata.discountedPrice}</td>
                <td><button onClick={()=>deletesho(shopdata._id) } style={{backgroundColor:"grey",height:"50px",borderRadius:"2rem"}}>Remove<i class="fa-solid fa-trash" style={{marginLeft:"0.5rem"}}></i></button></td>
                </tr>
            ))}
            
        </tbody>
        </table>

    </div>
    </div>
  );
};

export default Shoplist;