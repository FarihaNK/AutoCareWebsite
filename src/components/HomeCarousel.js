import './Home.css';
import Image_1 from './Images/Image_1.jpeg';
import Image_2 from './Images/Image_2.png';
import Image_3 from './Images/Image_3.jpeg';

const HomeCarousel = () => {
  return (
    <div>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item">
        <img src={Image_1} className="d-block w-100" style={{ height: '500px', opacity: 0.85, filter: 'brightness(40%)' }} alt="Image_1" />
        {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Customer-Centric Approach</h1>
            <p class="">Your satisfaction is our priority. We strive to build lasting relationships with our customers through transparent communication and exceptional service.</p>
            <p><a class="btn btn-lg Button" href="#Form">Call us today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <img src={Image_2} className="d-block w-100" style={{ height: '500px', opacity: 0.85, filter: 'brightness(40%)' }} alt="Image_2" />
        {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
        <div class="container">
          <div class="carousel-caption">
            <h1>Expert Technicians</h1>
            <p>Our team of skilled and certified technicians is dedicated to providing precision services with a keen attention to detail.</p>
            <p><a class="btn btn-lg Button" href="#Form">Call us today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <img src={Image_3} className="d-block w-100" style={{ height: '500px', opacity: 0.85, filter: 'brightness(40%)' }} alt="Image_3" />
        {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg> */}
        <div class="container">
          <div class="carousel-caption text-end">
            <h1>Comprehensive Services</h1>
            <p>From routine maintenance to complex repairs, we offer a wide range of autocare services to keep your vehicle running smoothly.</p>
            <p><a class="btn btn-lg Button" href="#Services">Learn more</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  );
};

export default HomeCarousel;