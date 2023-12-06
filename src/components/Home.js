import './Home.css';
import './HoursTable';
import HoursTable from './HoursTable';

const Home = () => {
  return (
    <div>
      <div className='intro'>Give your car...WINGS!</div>
      <HoursTable/>
    </div>
  );
};

export default Home;