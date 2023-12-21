import './Home.css';
import './HoursTable';
import HomeCarousel from './HomeCarousel';
import Services from './Services';
import HoursTable from './HoursTable';
import FAQ from './FAQ';
import Form from './Form';
import Reviews from './Reviews';
import Location from './Location';

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <div className='intro'>
        {/* <h1>Give your car...WINGS!</h1> */}
        <br/><br/>
        <p>At Shahnawaz AutoCare, we understand that your vehicle is more than just a mode of transportation; 
        it's an essential part of your daily life. With a passion for automotive excellence, 
        we take pride in offering top-notch autocare services that go beyond the ordinary.
        Discover the difference at Shahnawaz AutoCare. Our friendly staff is ready to welcome you to a world of autocare excellence.
        Whether you drive a sedan, SUV, or truck, your vehicle is in capable hands.
        Give your car WINGS at Shahnawaz AutoCare.

</p>
      </div>    
      <div className='hours-location'>
        <HoursTable/>
        <Location/>
      </div>
      <Services/>
      <Reviews/>
      <FAQ/>
      <Form/>
    </div>
  );
};

export default Home;