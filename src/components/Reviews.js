import './Home.css';

const Reviews = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center'}} className='Reviews' id="Reviews">
      <div style={{ flex: 1, padding: '20px' }}>
        <em>"This is an excellent mechanic shop! I have been coming here for over 8 years and have had nothing but great experiences.
            They are affordable, honest, reliable, and trustworthy. 
            As a female, I find it hard to trust mechanics as they always over charge me and lie to me. 
            But the employees here treat me well and charge me reasonable prices! Ask for Tahir. 
            He's my go to mechanic with everything I need done for my car!"</em>
        <br/><br/>
        <strong>- Ruya Qurby</strong>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <em>"Very honest and knowledgeable mechanic. Prices are fair. Highly recommend for people that don't want to be ripped off.
            Fixes what needs to be fixed. Very friendly and kind towards women. We will continue to bring our vehicles here. 
            Great service and fair prices, also uses quality parts, no white box garbage. I like that. 
            I'd rather pay more for quality parts that last. I suggest dropping it off since he has limited staff.
            Thanks again Shahnawaz for taking care of our vehicles."</em>
        <br/><br/>
        <strong>- Darrell and Mellisa</strong>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <em>"Excellent one-stop shop for all car needs. Cost-efficient pricing and great servicing. The owner is very good. 
            I would recommend Shahnawaz Auto Care to anyone looking to get their care serviced with guaranteed peace of mind."</em>
        <br/><br/>
        <strong>- Shilpa</strong>
      </div>
    </div>
  );
};

export default Reviews;