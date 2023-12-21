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
                <p className="card-text">
                Keep Your Engine Running Smoothly with Our Express Lube Service
                </p>
                <p className="additional-text">
                Experience quick and efficient service with our Express Lube Service. 
                Our skilled technicians will swiftly replace your oil and filter, ensuring optimal engine performance. 
                Trust us for a fast turnaround without compromising on quality. Drive in today for a service that keeps your engine humming.
              </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Image_2} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Brakes</h5>
                <p class="card-text">Safety First: Expert Brake Services for Your Peace of Mind
                </p>
                <p className="additional-text">
                Your safety is our priority. Our brake services guarantee reliable and responsive braking performance. 
                From brake inspections to pad replacements, our certified technicians will ensure your vehicle stops confidently. 
                Drive with peace of mind, knowing your brakes are in top-notch condition.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Image_3} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Muffler</h5>
                <p class="card-text">Quiet Rides, Quality Service: Muffler Repairs and Upgrades
                </p>
                <p className="additional-text">
                Experience a smoother and quieter ride with our muffler services. Whether it's a repair or an upgrade, 
                our technicians will have your exhaust system running efficiently. Enjoy the road with a well-maintained 
                muffler that enhances performance and reduces noise. Visit us for a quieter, more enjoyable driving experience.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Image_2} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Engine</h5>
                <p class="card-text">Unlock Your Engine's Potential with Our Expert Engine Services
                </p>
                <p className="additional-text">
                Your engine is the heart of your vehicle. Trust our skilled technicians to provide 
                comprehensive engine services, from diagnostics to repairs. We specialize in optimizing engine performance, 
                ensuring your vehicle runs smoothly and efficiently. Drive with confidence, knowing your engine is in expert hands.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Image_3} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Transmission</h5>
                <p class="card-text">Smooth Shifting, Expert Care: Transmission Services You Can Trust
                </p>
                <p className="additional-text">
                Ensure your vehicle's transmission is in top shape with our specialized services. 
                From routine maintenance to complex repairs, our technicians are well-versed in transmission care. 
                Experience smooth shifting and prolonged transmission life with our expert services. Drive away with confidence in every gear.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={Image_1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Oil Change</h5>
                <p class="card-text">Preserve Your Engine's Lifespan with Our Professional Oil Change Services
                </p>
                <p className="additional-text">
                Regular oil changes are the key to a healthy engine. Rely on our technicians to provide timely 
                and efficient oil changes, using quality products that suit your vehicle's needs. Maintain optimal 
                lubrication and extend your engine's lifespan with our professional oil change services. Drive in today 
                for an oil change that keeps your engine purring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
  
export default Services;