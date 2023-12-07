import './Home.css';
import Image_1 from './Images/Image_1.jpeg';
import Image_2 from './Images/Image_2.png';
import Image_3 from './Images/Image_3.jpeg';

const Services = () => {
    return (
      <div class="Services" id="Services">
        <h2>These are the services</h2>
        <br/>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src={Image_1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Express Lube Service</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Image_2} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Brakes</h5>
                <p class="card-text">This is a short card.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Image_3} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Muffler</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Image_2} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Engine</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Image_3} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Transmission</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Image_1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Filler</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default Services;