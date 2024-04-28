import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function InvestorProfile() {
  const [investorInfo, setInvestorInfo] = useState({
    name: '',
    email: '',
    contact: '',
    investmentBudget: '',
    preferredIndustries: '',
    address: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestorInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can do something with the investor information, such as sending it to a server or processing it further
    const confirmation = window.confirm('User added successfully. Click OK to go to ideas page.');
      if (confirmation) {
        // Navigate to ideas page
        navigate('/ideas')
      }
  };

  return (
    <div className="container fs-5">
      <h2>Investor Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-3 text-start" controlId="formFullName">
          <Form.Label className="col-sm-2">Full Name:</Form.Label>
          <div >
            <Form.Control type="text" name="name" value={investorInfo.name} onChange={handleChange} />
          </div>
        </Form.Group>
        <Form.Group className="m-3 text-start" controlId="formEmail">
          <Form.Label className="col-sm-2">Email:</Form.Label>
          <div >
            <Form.Control type="email" name="email" value={investorInfo.email} onChange={handleChange} />
          </div>
        </Form.Group>
        <Form.Group className="m-3 text-start" controlId="formPhoneNumber">
          <Form.Label className="col-sm-2">Contact:</Form.Label>
          <div >
            <Form.Control type="text" name="phoneNumber" value={investorInfo.phoneNumber} onChange={handleChange} />
          </div>
        </Form.Group>
        <Form.Group className="m-3 text-start" controlId="formInvestmentBudget">
          <Form.Label className="col-sm-2">Investment Budget:</Form.Label>
          <div >
            <Form.Control type="text" name="investmentBudget" value={investorInfo.investmentBudget} onChange={handleChange} />
          </div>
        </Form.Group>
        <Form.Group className="m-3 text-start" controlId="formPreferredIndustries">
          <Form.Label >Preferred Industries:</Form.Label>
          <div >
            <Form.Control type="text" name="preferredIndustries" value={investorInfo.preferredIndustries} onChange={handleChange} />
          </div>
        </Form.Group>
        <Form.Group className="m-3 text-start" controlId="formLocation">
          <Form.Label className="col-sm-2">Address:</Form.Label>
          <div >
            <Form.Control type="text" name="address" value={investorInfo.location} onChange={handleChange} />
          </div>
        </Form.Group>
        <div className="row">
          <div className="col-sm-10 offset-sm-2">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default InvestorProfile;
