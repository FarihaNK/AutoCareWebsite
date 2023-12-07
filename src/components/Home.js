import './Home.css';
import './HoursTable';
import HomeCarousel from './HomeCarousel';
import Services from './Services';
import HoursTable from './HoursTable';
import FAQ from './FAQ';

const Home = () => {
  return (
    <div>
      <HomeCarousel/>
      <div className='intro'>Give your car...WINGS!<br/>more info here</div>
      <HoursTable/>
      <Services/>
      <div className='filler'><h3>more info here</h3></div>
      <FAQ/>
    </div>
  );
};

export default Home;