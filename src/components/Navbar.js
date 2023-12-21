import './Home.css';
import AutoCareIcon from './Images/AutoCareIcon.jpeg';

const Navbar = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src={AutoCareIcon} className="Icon" alt="Icon"/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Hours">Hours</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#FAQ">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#Form">Contact Us</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn Button" type="submit">Search</button>
        </form>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;