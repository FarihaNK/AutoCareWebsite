import './Home.css';
import './HoursTable';
import HomeCarousel from './HomeCarousel';
import Services from './Services';
import HoursTable from './HoursTable';
import FAQ from './FAQ';
import Form from './Form';
import Reviews from './Reviews';

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <div className='intro'>Give your car...WINGS!<br/>more info here</div>
      <HoursTable/>
      <Services/>
      <Reviews/>
      <FAQ/>
      <Form/>
    </div>
  );
};

export default Home;