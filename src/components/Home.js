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
      <div className='intro'>Give your car...WINGS!<br/>more info here</div>
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