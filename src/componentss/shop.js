import './shop.css';
import axios from 'axios';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Card() {
 
  
  const [searchTerm, setSearchTerm] = useState('');
  const [ cartItems,setCartItems] = useState([]);

  const data = [
 
    { imageurl: '../fan1.png',
     name: 'Stand fan', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../fan2.jpeg',
     name: 'Ceiling fan', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../f3.webp',
     name: 'Cooling fan',
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../f4.webp',
     name: 'Hand fan', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../fan blade.png',
     name: 'Fan blade', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../small fan.png',
     name: 'Small fan', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../light fixtures.jpeg',
     name: 'Light fixtures', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../ceiling lights.jpg',
     name: 'Ceiling lights', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../led lights.jpg',
     name: 'led lights', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../graden lights.jpeg',
     name: 'graden light', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../tube light.jpg',
     name: 'Tube light', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../bulbs.jpg',
     name: 'Bulbs', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../window-ac.jpg',
     name: 'Window AC', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../portable-ac.jpg',
     name: 'Portable AC', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../haier ac.png',
     name: 'Haier AC', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../central ac.jpeg',
     name: 'Central AC', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
     { imageurl: '../cassette ac.jpg',
     name: 'Mother Board', 
     stars: '3', 
     discount: '75', 
     originalPrice: '999',
     discountedPrice:"599"},
  ];
 
  
 

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleButtonClick = (itemName) => {
    const selectedItem = filteredData.find((item) => item.name === itemName)
    // You can add custom logic here when a button is clicked
    console.log(`Button clicked for ${itemName}`);
   
    // Add the selected item to the cartItems state
    setCartItems((prevCartItems) => [...prevCartItems, selectedItem]);
    axios.post('http://localhost:4500/addToCart', selectedItem)
    .then(response => {
      console.log('Success:', response.data);
      alert("Added to Cart Successfully")
      // You can handle success response from the server
    })
    .catch(error => {
      console.error('Error:', error);
      // You can handle errors here
    });
  };

  return (
    
      
  
    <div className='container' style={{ border: '0px' }} id='SHOP' >
      {/* Search Bar */}
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       <Link to="/shoplist"><i class="fa-solid fa-cart-plus fa-2x" style={{color: "black",marginLeft:"2rem"}}></i></Link>

      <div className='row'>
        {filteredData.map((item, index) => (
          <div key={index} className='col-md-2'>
            <img src={item.imageurl} alt='' style={{ height: '300px', width: '200px' }} />
            <p>{item.name}</p>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>
            <i className='fa-solid fa-star' style={{ color: 'green' }}></i>

            <h6 style={{ color: 'green' }}>{item.discount} off</h6>
            <p>
              <del>{item.originalPrice}</del> {item.discountedPrice}
            </p>
             <h4 onClick={() => handleButtonClick(item.name)} style={{color:"red",cursor:"pointer"}}>Add to Cart<i class="fa-solid fa-cart-plus" style={{color: "red",cursor:"pointer"}}></i></h4>
          </div>
        ))} 
      </div>
    </div>
    
  );
}

export default Card;


