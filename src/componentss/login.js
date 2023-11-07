// import React, { useState} from "react";
// import axios  from "axios";
// import "./login.css"



// function Form() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };
//   const[form,setForm]=useState({
//     'Name':"",'Email':"",'PhoneNumber':"",'Address':"",'Model':"",'Brand':"",'Problem':""
  
//   })
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//      axios.post("http://localhost:4500/addlogin",{form })
//      .then((res)=>console.log(res.data))
  

//     closeModal();

//   }
//   return(
    
//     <div className="container-fluid" id="CONTACT" style={{marginTop:"2rem"}}>
//       <div className="row">
//         <div className="col-md-12">
//           <button  onClick={openModal} type="submit" className="btn2 mb-5"style={{marginTop:"4rem"}} >
//             Book your Slot
//           </button>
//           {isOpen&&(
//             <div className="modal">
//               <div className="modal-content">
               
//                 <span className="close" onClick={closeModal} style={{color:"red"}}>X</span>
                
//                 <form onClick={handleSubmit}>
//                   <h4 >Customer Details</h4>
//                   <label>Name:</label>
//                   <input type="text" name="Name" onChange={(e)=>setForm({...form,Name:e.target.value})}onClick={(e) => e.stopPropagation()} />
//                   <br/>
//                   <label>Email:</label>
//                   <input type="email" name="Email" onChange={(e)=>setForm({...form,Email:e.target.value})} onClick={(e) => e.stopPropagation()} />
//                   <br/>
//                   <label>PhoneNumber:</label>
//                   <input type="number" name="PhoneNumber" onChange={(e)=>setForm({...form,PhoneNumber:e.target.value})} onClick={(e) => e.stopPropagation()} />
//                   <br/>
//                   <label>Address:</label>
//                   <input type="text" name="Address" onChange={(e)=>setForm({...form,Address:e.target.value})} onClick={(e) => e.stopPropagation()} />
//                   <br/>
//                   <label>Brand:</label>
//                   <input type="text" name="Brand" onChange={(e)=>setForm({...form,Brand:e.target.value})} onClick={(e) => e.stopPropagation()} />
//                   <br/>
//                   <label>Model:</label>
//                   <input type="text" name="Model" onChange={(e)=>setForm({...form,Model:e.target.value})} onClick={(e) => e.stopPropagation()} />
//                   <br/>
//                   <label>Problem:</label>
//                   <input type="text" name="Problem" onChange={(e)=>setForm({...form,Problem:e.target.value})} onClick={(e) => e.stopPropagation()} />
//                   <br/>
//                   <input type="submit" value="submit" className=""/>


//                 </form>
//               </div>

//             </div>
//           )}
//         </div>

//       </div>
//     </div>

//   )
// }
// export default Form;


