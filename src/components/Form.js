import './Home.css';

const Form = () => {
  return (
    <div className='Form' id="Form">
        <h4>Have questions? Email us!</h4>
        <br/>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
        <input class="form-control" id="exampleFormControlInput1" placeholder="Jane Doe"/>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
    </div>
    <div class="SubmitButton">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
    </div>
    </div>
  );
};

export default Form;