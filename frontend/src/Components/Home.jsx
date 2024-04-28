import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className='container p-5'>
        <h1>Welcome to the Investment Application</h1>
        <div className="button-container m-5 fs-3">
          <button className='p-5 fs-3 fw-bold'><Link to={'/UserProfile'} className='text-decoration-none text-white'>Post Startup Ideas</Link></button>
          <button  className='fs-3 fw-bold'><Link to={'/InvestorProfile'} className='text-decoration-none text-white'>Explore Investment Opportunities</Link></button>
        </div>
      </div>
    );
  }
}

export default Home;
