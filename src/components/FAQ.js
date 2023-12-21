import './Home.css';

const FAQ = () => {
  return (
    <div className='FAQ' id="FAQ">
        <h1>FAQ</h1>
        <br/>
    <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                How often should I get an oil change?
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
            We recommend a regular oil change every 3,000 to 5,000 miles, depending on your vehicle and the type of oil used. Refer to your vehicle's manual for manufacturer-specific recommendations.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            How do I know if my brakes need service?
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
            Warning signs include squeaking or grinding noises, reduced responsiveness, or a vibrating steering wheel. If you experience any of these issues, it's crucial to have your brakes inspected promptly.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            When should I have my transmission serviced?
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
            Regular transmission maintenance is crucial. We recommend servicing every 30,000 to 60,000 miles, but it's essential to check your vehicle's manual for specific recommendations.
            </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
            Do I need an appointment for autocare services?
            </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
            <div class="accordion-body">
            While appointments are recommended, we also welcome walk-ins. Contact us to schedule a convenient time or stop by, and we'll do our best to accommodate you.


            </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default FAQ;
