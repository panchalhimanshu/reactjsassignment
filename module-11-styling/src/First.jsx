import React from 'react';
import flag from "./image/flag.png"
import virat from "./image/virat.jpg"
import Fetchh from './FetchOffline.json';
import "./First.css"
// import {motion} from 'framer-motion'
// import { FFadeIn } from './Animations';



function First() {

  return (
    <>

     <div className='header'> 
      <div className='header-parts'>
      <div className='header-part1'>

        <div className='booking'>Booking.com</div>

        <div className='state'>
          <div className='inr'>INR</div>
          <div className='logo'><img src={flag} /></div>
          <div className='round'> <i class='bx bx-user'></i></div>
          <div className='property'>List Your property</div>
          <div className='btn btn1'>Register</div>
          <div className='btn'>Sign-in</div>
          <div className='header-logo '><i class='bx bx-user'></i></div>
          <div className='header-logo header-logo1'><i class='bx bx-user'></i></div>
        </div>
      </div>




 
      <div className='header-part2'>
      <div className='logo-travelling logo-travelling1'><i class='bx bx-user'></i> stays</div>
      <div className='logo-travelling'><i class='bx bx-user'></i> Flights</div>
      <div className='logo-travelling'><i class='bx bx-user'></i>Hotel</div>
      <div className='logo-travelling  logo-travelling2'><i class='bx bx-user'></i>Car rentals</div>


      <div className='logo-travelling logo-travelling-main logo-travelling3'><i class='bx bx-user'></i>more

  <div className='buttons'>
    <div className='logo-travelling'><i class='bx bx-user'></i>Car rentals</div>
      <div className='logo-travelling'><i class='bx bx-user'></i>Attraction</div>
      <div className='logo-travelling'><i class='bx bx-user'></i>Airport taxis</div>
  </div>
      
      </div>


      <div className='logo-travelling logo-travelling2'><i class='bx bx-user'></i>Attraction</div>
      <div className='logo-travelling logo-travelling2'><i class='bx bx-user'></i>Airport taxis</div>
      </div>




 <h1>Find Your Next Stay</h1>
 <p>Serch low prices on hotels,homes and much more...</p>


 <div className='inputs'>
  <div><select>
    <option>Where are you going </option>
    <option>Goa</option>
    <option>USA</option>
    <option>Canada</option>
    <option>Ukrain</option>
    </select></div>
  <div><input type='datetime-local'/></div>
  <div><input type=''/>
  </div>
  <button style={{background : "blue"}} className='serch-btn'>Serch</button>
 </div>

      </div> 
      </div>



<div

className='map-section'>
  <div className='map'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.939248822181!2d72.55443880927116!3d23.026002716116437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84faa5a36071%3A0x9af325a448f09478!2sTops%20Technologies!5e0!3m2!1sen!2sin!4v1689428793855!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe></div>


  <div className='section  '>

<div className='section-1'>
    <div className='sec-img'> <img src={virat} className='imgg' /> </div>
</div>
<div className='section-2'>
    <div className='sec-content'>
      <h2 className='hotel-name txt'>{Fetchh[0].name}</h2>
      <button className='featured-btn'>Featured</button>
      <u>Aguada</u><u className='show-map'> Show on map</u>
      <button className='Litimed-btn'>Limited-time Deal</button>
     <div className='part-of-section'>
     <b>Deluxe Room</b>
      <p>1 double bed</p>
      <h5>* Free cancellation</h5>
      <h5 className='pay-property'>* No prepayment needed</h5><span>-pay at the property</span>
     </div>
    </div>
</div>


<div className='section-3'>
  <div className='prices'>
    <b>Exceptional</b>
    <p>3 reviews</p>
    <b className='location'>Location 10</b>
    <button className='Litimed-btn Litimed-btn2'>New to Booking.com</button>
    <div className='section-in-part'>
      <p>1 night 2 adults</p> 
      <del>6299</del><b>3,779</b>
      <p>+454 taxesmand charges</p>
    <button className='Litimed-btn Litimed-btn3'>See availability </button>
    </div> 
  </div>
</div>



  </div>



</div>




    </>
  );
}

export default First;
