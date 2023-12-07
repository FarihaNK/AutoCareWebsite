import './Home.css';
import './HoursTable';
import HoursTable from './HoursTable';
import FAQ from './FAQ';

const Home = () => {
  return (
    <div>
      <div className='intro'>Give your car...WINGS!<br/>more info here</div>
      <HoursTable/>
      <FAQ/>
    </div>
  );
};

export default Home;