import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserProfile() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    contact: "",
    photo: "",
    idea: "",
    proposal: "",
    budget: "",
    industryType: "",
    availableFunds: "",
    fundsNeeded: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // If the input is a file input, set the photo in the state
    if (name === "photo") {
      setUserInfo({ ...userInfo, [name]: files[0]}); // Assuming single file upload
    } else {
      setUserInfo({ ...userInfo, [name]: value });
    }
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/addUser", {...userInfo, photo: userInfo.photo.name})
      .then((response) => {
        // Handle response if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error if needed
        console.error("Error:", error);
      });
    const confirmation = window.confirm(
      "User added successfully. Click OK to go to ideas page."
    );
    if (confirmation) {
      // Navigate to ideas page
      navigate("/ideas");
    }
  };

  return (
    <div className="container fs-5">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="m-3 text-start">
          <label htmlFor="name" className="col-form-label">
            Full Name:
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-3 text-start">
          <label htmlFor="email" className="col-sm-2 col-form-label">
            Email:
          </label>
          <div>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-3 text-start">
          <label htmlFor="contactNo" className="col-sm-2 col-form-label">
            Contact:
          </label>
          <div>
            <input
              type="number"
              className="form-control"
              id="contact"
              name="contact"
              value={userInfo.contact}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-3 text-start">
          <label htmlFor="photo" className="col-sm-2 col-form-label">
            Photo:
          </label>
          <div>
            <input
              type="file"
              className="form-control"
              id="photo"
              name="photo"
              onChange={handleChange}
            />
          </div>
        </div>
        {userInfo.photo && (
          <div>
            <p>Selected Photo:</p>
            <img src={URL.createObjectURL(userInfo.photo)} alt="Selected" />
          </div>
        )}
        <div className="m-3 text-start">
          <label htmlFor="idea" className="col-sm-2 col-form-label">
            Idea:
          </label>
          <div>
            <textarea
              className="form-control"
              id="idea"
              name="idea"
              value={userInfo.idea}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-3 text-start">
          <label htmlFor="proposal" className="col-sm-2 col-form-label">
            Proposal/Description/Plan:
          </label>
          <div>
            <textarea
              className="form-control"
              id="proposal"
              name="proposal"
              value={userInfo.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-3 text-start">
          <label htmlFor="industryType" className="col-sm-2 col-form-label">
            Industry Type:
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="industryType"
              name="industryType"
              value={userInfo.industryType}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-3 text-start">
          <label htmlFor="budget" className="col-sm-2 col-form-label">
            Budget:
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="budget"
              name="budget"
              value={userInfo.budget}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-3 text-start">
          <label htmlFor="availableFunds" className="col-sm-2 col-form-label">
            Available Funds:
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="availableFunds"
              name="availableFunds"
              value={userInfo.availableFunds}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-3 text-start">
          <label htmlFor="fundsNeeded" className="col-sm-2 col-form-label">
            Funds Needed:
          </label>
          <div>
            <input
              type="text"
              className="form-control"
              id="fundsNeeded"
              name="fundsNeeded"
              value={userInfo.fundsNeeded}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="m-3">
          <div className="offset-sm-2">
            <button type="submit" className="btn btn-primary p-3">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserProfile;
