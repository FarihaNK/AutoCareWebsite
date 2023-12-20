import './Home.css';
import './HoursTable';
import HomeCarousel from './HomeCarousel';
import Services from './Services';
import HoursTable from './HoursTable';
import FAQ from './FAQ';
import Form from './Form';
import Reviews from './Reviews';
import Location from './Location';
import facebook from './Images/facebook.png';

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <div className='intro'>Give your car...WINGS!<br/>more info here</div>
      <div className='hours-location'>
        <HoursTable/>
        <Location/>
      </div>
      <Services/>
      <Reviews/>
      <FAQ/>
      <div className='form-contacts'>
        <Form/>
        <div className='contacts'>
          <h4>Contact Us</h4> <br/>
          <a href={"https://www.facebook.com/ShahnawazAutoCare/"} target="_blank" rel="noopener noreferrer">
            <img className="facebook-icon" src={facebook} alt="Facebook" style={{ width: '40px', height: '40px' }} />
          </a> <br/>
          <p>phone number</p>
          <p>+1 (416) 742 9615</p>
          <p>emailaddress.email.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;